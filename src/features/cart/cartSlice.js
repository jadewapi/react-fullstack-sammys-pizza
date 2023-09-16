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

// {
//   "id": 1,
//   "name": "Margherita",
//   "unitPrice": 12,
//   "imageUrl": "https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-1.jpg",
//   "ingredients": [
//   "tomato",
//   "mozzarella",
//   "basil"
//   ],
//   "soldOut": false,
// },
