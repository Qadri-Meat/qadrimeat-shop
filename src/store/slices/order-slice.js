import { createSlice, createAsyncThunk, isAnyOf } from "@reduxjs/toolkit";
import OrderService from "services/OrderService";

const initialState = {
  products: [],
};

export const createOrder = createAsyncThunk(
  "Order/create",
  async (data, { rejectWithValue }) => {
    console.log("=====Data of store===== ", data);
    try {
      const res = await OrderService.create(data);

      const totalPaid1 = res.data.transactions.reduce(function (a, b) {
        return a + b.amount;
      }, 0);
      return {
        loading: false,
        selectedOrder: { ...res.data, totalPaid: totalPaid1 || 0 },
        success: true,
      };
    } catch (err) {
      console.log("Error is", err.response.data.message);
      return rejectWithValue(err.response.data);
    }
  }
);

const orderSlice = createSlice({
  name: "orders",
  initialState,
  extraReducers: (builder) => {
    builder.addMatcher(isAnyOf(createOrder.pending), (state, action) => {
      state.loading = true;
    });
    builder.addMatcher(
      isAnyOf(createOrder.fulfilled, createOrder.rejected),
      (state, action) => {
        return action.payload;
      }
    );
  },
});

const { reducer } = orderSlice;
export default reducer;
