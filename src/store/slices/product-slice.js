import { createSlice, createAsyncThunk, isAnyOf } from "@reduxjs/toolkit";
import ProductService from "services/ProductService";

const initialState = {
  products: [],
};

export const getAllProducts = createAsyncThunk(
  "products/getAll",
  async (data, { rejectWithValue }) => {
    try {
      const res = await ProductService.getAll();
      return { products: res.data.results };
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getProduct = createAsyncThunk(
  "products/get",
  async (id, { rejectWithValue }) => {
    try {
      const res = await ProductService.get(id);
      return { details: res.data };
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addMatcher(
      isAnyOf(getAllProducts.pending, getProduct.pending),
      (state, action) => {
        state.loading = true;
      }
    );
    builder.addMatcher(
      isAnyOf(
        getAllProducts.fulfilled,
        getProduct.fulfilled,
        getAllProducts.rejected,
        getProduct.rejected
      ),
      (state, action) => {
        return action.payload;
      }
    );
  },
});

const { reducer } = productSlice;
export default reducer;
