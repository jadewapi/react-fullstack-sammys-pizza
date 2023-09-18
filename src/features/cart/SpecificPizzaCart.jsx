import { useSelector } from "react-redux";
import Quantity from "../../ui/Quantity";
import { getSpecificPizzaTotal } from "./cartSlice";
import { formatTotal } from "../../utils/helpers";
import { useCart } from "../../hooks/contextProvider";

function SpecificPizzaCart({ obj }) {
  const { setIsAdded } = useCart();
  const { id, quantity } = obj;
  const thisPizzasTotal = useSelector(getSpecificPizzaTotal(id));
  return (
    <div>
      <p>{obj.name}</p>
      <div>
        <p>{formatTotal(thisPizzasTotal)}</p>
        <Quantity id={id} quantity={quantity} setIsAdded={setIsAdded} />
      </div>
    </div>
  );
}

export default SpecificPizzaCart;
