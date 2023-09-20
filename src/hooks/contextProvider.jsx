import { createContext, useContext, useEffect, useState } from "react";
import { getRestaurantData } from "../services/apiRestaurant";

const CartContext = createContext();

export default function CartProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const values = {
    isOpen,
    setIsOpen,
  };
  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
}

export function useCart() {
  return useContext(CartContext);
}
