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

// export async function action({ request }) {
//   const formData = await request.formData();
//   const data = Object.fromEntries(formData);

//   const order = {
//     ...data,
//     cart: JSON.parse(data.cart),
//     priority: data.priority === "true",
//   };

//   console.log(order);

//   const errors = {};
//   if (!isValidPhone(order.phone))
//     errors.phone =
//       "Please give us your correct phone number. We might need it to contact you.";

//   if (Object.keys(errors).length > 0) return errors;

//   // If everything is okay, create new order and redirect
//   const newOrder = await createOrder(order);

//   // Do NOT overuse
//   store.dispatch(clearCart());

//   return redirect(`/order/${newOrder.id}`);
// }

// export async function createOrder(newOrder) {
//   try {
//     const res = await fetch(`${API_URL}/order`, {
//       method: "POST",
//       body: JSON.stringify(newOrder),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     if (!res.ok) throw Error();
//     const { data } = await res.json();
//     return data;
//   } catch {
//     throw Error("Failed creating your order");
//   }
// }
