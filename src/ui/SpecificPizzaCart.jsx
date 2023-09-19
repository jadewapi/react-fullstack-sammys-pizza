import { useSelector } from "react-redux";
import Quantity from "./Quantity";
import { getSpecificPizzaTotal } from "../features/cart/cartSlice";
import { formatTotal } from "../utils/helpers";
import { useCart } from "../hooks/contextProvider";

function SpecificPizzaCart({ obj }) {
  const { setIsAdded } = useCart();
  const { pizzaId, quantity } = obj;
  const thisPizzasTotal = useSelector(getSpecificPizzaTotal(pizzaId));
  return (
    <div>
      <p>{obj.name}</p>
      <div>
        <p>{formatTotal(thisPizzasTotal)}</p>
        <Quantity id={pizzaId} quantity={quantity} setIsAdded={setIsAdded} />
      </div>
    </div>
  );
}

export default SpecificPizzaCart;
