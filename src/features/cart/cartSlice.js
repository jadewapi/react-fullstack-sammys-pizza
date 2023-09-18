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
    increaseQuantity(state, action) {
      const pizza = state.cart.find((obj) => obj.id === action.payload);
      pizza.quantity++;
      pizza.totalPrice = pizza.quantity * pizza.unitPrice;
    },
    decreaseQuantity(state, action) {
      const pizza = state.cart.find((obj) => obj.id === action.payload);
      pizza.quantity--;
      pizza.totalPrice = pizza.quantity * pizza.unitPrice;
    },
    removePizza(state, action) {
      const index = state.cart.cart.findIndex(
        (obj) => obj.id === action.payload
      );
      state.cart.cart.splice();
    },
  },
});

export function getPizzaQuantity(id) {
  return function (state) {
    const pizza = state.cart.cart.find((obj) => obj.id === id);
    if (pizza) {
      return pizza.quantity;
    }
    return 0;
  };
}

export const { addPizzaToCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
