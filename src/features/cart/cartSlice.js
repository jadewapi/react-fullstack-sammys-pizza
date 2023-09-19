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
      pizza.totalPrice = pizza.quantity * pizza.unitPrice;
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
    clearCart(state) {
      state.cartArray = [];
    },
  },
});

export function getSpecificPizzaTotal(id) {
  return function (state) {
    const pizza = state.cart.cartArray.find((obj) => obj.id === id);
    return pizza.totalPrice;
  };
}

export function getCart() {
  return function (state) {
    return state.cart.cartArray;
  };
}

export function getQuantity(id) {
  return function (state) {
    const pizza = state.cart.cartArray.find((obj) => obj.id === id);
    return pizza ? pizza.quantity : 0;
  };
}

export function getTotalNumPizzas() {
  return function (state) {
    const total = state.cart.cartArray.reduce(
      (acc, curr) => acc + curr.quantity,
      0
    );
    return total;
  };
}

export function getTotalOfAllPizas() {
  return function (state) {
    return state.cart.cartArray.reduce((acc, curr) => acc + curr.totalPrice, 0);
  };
}

export const {
  addPizza,
  deletePizza,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
