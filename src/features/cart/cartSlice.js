import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartArray: [
    // id,
    // name,
    // ingredients,
    // unitPrice,
    // totalPrice: unitPrice,
    // quantity: 1,
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addPizza(state, action) {
      state.cartArray.push(action.payload);
    },
    deletePizza(state, action) {
      const pizza = state.cartArray.findIndex(
        (obj) => obj.id === action.payload
      );
      if (pizza !== -1) {
        state.cartArray.splice(pizza, 1);
      }
    },
    increaseQuantity(state, action) {
      const pizza = state.cartArray.find((obj) => obj.id === action.payload);
      pizza.quantity++;
      pizza.totalPrice = pizza.quantity * pizza.quantity;
    },
    decreaseQuantity(state, action) {
      const index = state.cartArray.findIndex(
        (obj) => obj.id === action.payload
      );
      state.cartArray[index].quantity--;
      state.cartArray[index].totalPrice =
        state.cartArray[index].unitPrice * state.cartArray[index].quantity;
      if (state.cartArray[index].quantity === 0)
        state.cartArray.splice(index, 1);
    },
  },
});

export function getQuantity(id) {
  return function (state) {
    const pizza = state.cart.cartArray.find((obj) => obj.id === id);
    return pizza ? pizza.quantity : 0;
  };
}

export const { addPizza, deletePizza, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
