import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { CartState } from "./cartTypes";

const initialState: CartState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
  loading: false,
  error: null,
};

export const fetchCart = createAsyncThunk(
  "cart/fetchCart",
  async () => {
    const res = await fetch("http://localhost:5000/api/cart");
    return await res.json();
  }
);

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (productId: number) => {
    await fetch("http://localhost:5000/api/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId }),
    });
  }
);

export const removeFromCart = createAsyncThunk(
  "cart/removeFromCart",
  async (productId: number, { dispatch }) => {
    await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: "DELETE",
    });
    dispatch(fetchCart());
  }
);


const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.items;
        state.totalItems = action.payload.totalItems;
        state.totalPrice = action.payload.totalPrice;
      })
      .addCase(fetchCart.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to load cart";
      });
  },
});

export default cartSlice.reducer;
