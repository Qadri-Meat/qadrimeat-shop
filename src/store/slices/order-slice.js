import {
  createSlice,
  createAsyncThunk,
  isAnyOf,
  createAction,
} from "@reduxjs/toolkit";
import OrderService from "services/OrderService";

const initialState = {};

export const createOrder = createAsyncThunk(
  "orders/create",
  async (data, { rejectWithValue }) => {
    console.log("=====Data of store===== ", data);
    try {
      const res = await OrderService.create(data);

      const totalPaid1 = res.data.transactions.reduce(function (a, b) {
        return a + b.amount;
      }, 0);
      return {
        loading: false,
        details: { ...res.data, totalPaid: totalPaid1 || 0 },
        success: true,
      };
    } catch (err) {
      console.log("Error is", err.response.data.message);
      return rejectWithValue(err.response.data);
    }
  }
);
export const getOrder = createAsyncThunk(
  "orders/get",
  async (id, { rejectWithValue }) => {
    try {
      const res = await OrderService.get(id);

      const totalPaid1 = res.data.transactions.reduce(function (a, b) {
        return a + b.amount;
      }, 0);
      return {
        loading: false,
        details: { ...res.data, totalPaid: totalPaid1 || 0 },
      };
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
export const resetOrder = createAction("orders/reset");

const orderSlice = createSlice({
  name: "orders",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(resetOrder, (state, action) => {
      return {};
    });
    builder.addMatcher(
      isAnyOf(createOrder.pending, getOrder.pending),
      (state, action) => {
        state.loading = true;
      }
    );
    builder.addMatcher(
      isAnyOf(
        createOrder.fulfilled,
        getOrder.fulfilled,
        getOrder.rejected,
        createOrder.rejected
      ),
      (state, action) => {
        return action.payload;
      }
    );
  },
});

const { reducer } = orderSlice;
export default reducer;
