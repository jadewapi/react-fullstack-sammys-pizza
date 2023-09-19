import { createContext, useContext, useEffect, useState } from "react";
import { getRestaurantData } from "../services/apiRestaurant";

const CartContext = createContext();

export default function CartProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [menu, setMenu] = useState([]);
  useEffect(function () {
    async function fetchData() {
      try {
        setIsLoading(true);
        const data = await getRestaurantData();
        setMenu(data);
        console.log(data);
      } catch (err) {
        console.log(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);
  const values = {
    isOpen,
    setIsOpen,
    isLoading,
    setIsLoading,
    menu,
    setMenu,
  };
  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
}

export function useCart() {
  return useContext(CartContext);
}
