import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addPizzaToCart(state, action) {
      state.cart.push(action.payload);
    },
  },
});

export const { addPizzaToCart } = cartSlice.actions;

export default cartSlice.reducer;
