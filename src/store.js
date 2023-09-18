import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cart/cartSlice";
import userSlice from "./features/order/userSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    user: userSlice,
  },
});

export default store;
