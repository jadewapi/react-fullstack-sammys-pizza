import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducer: {
    addToCart(state, action) {
      state.cart = state.cart.push(action.payload);
    },
  },
});

export const { addToCart } = orderSlice.actions;
export default orderSlice.reducer;
