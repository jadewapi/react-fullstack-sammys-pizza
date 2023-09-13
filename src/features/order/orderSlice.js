import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cart.push(action.payload);
    },
  },
});

export const { addToCart } = orderSlice.actions;
export default orderSlice.reducer;
