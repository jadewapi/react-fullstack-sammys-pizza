import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  // {
  //   id,
  //   ingredients,
  //   name,
  //   unitPrice,
  //   quantity: 1,
  //   totalPrice: unitPrice,
  // },
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addPizzaToCart(state, action) {
      state.cart.push(action.payload);
    },
    increaseQuantity(state, action) {
      const pizza = state.cart.find((obj) => obj.id === action.payload);
      pizza.quantity++;
      pizza.totalPrice = pizza.quantity * pizza.unitPrice;
    },
  },
});

export function getPizzaQuantity(id) {
  return function (state) {
    const pizzaCount = state.cart.find((obj) => obj.id === id);
    if (pizzaCount) {
      return pizzaCount.quantity;
    }
  };
}

export const { addPizzaToCart } = cartSlice.actions;

export default cartSlice.reducer;
