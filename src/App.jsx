import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./features/homepage/Homepage";
import Menu from "./features/menu/Menu";
// import Cart from "./features/cart/Cart";
import Order from "./features/order/Order";
import OrderId from "./features/order id/OrderId";
import Error from "./ui/Error/Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="menu" element={<Menu />} />
        <Route path="order" element={<Order />} />
        <Route path="order/:id" element={<OrderId />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
``;
