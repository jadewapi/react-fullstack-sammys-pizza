import { useEffect, useState } from "react";
import { formatTotal, ingredientsJoin } from "../utils/helpers";
import Quantity from "./Quantity";
import { useDispatch, useSelector } from "react-redux";
import { addPizza, getQuantity } from "../features/cart/cartSlice";

const soldOutStyling = {
  filter: "grayscale(1)",
  opacity: "20%",
};

function Pizza({ obj }) {
  const [isAdded, setIsAdded] = useState(false);
  const { imageUrl, soldOut, name, ingredients, unitPrice, id: pizzaId } = obj;
  const newObject = {
    pizzaId,
    name,
    ingredients,
    unitPrice,
    totalPrice: unitPrice,
    quantity: 1,
  };
  const dispatch = useDispatch();
  const quantity = useSelector(getQuantity(pizzaId));
  // so that way we dont have to share isAdded state to every single component that uses quantity component.
  useEffect(
    function () {
      if (quantity === 0) setIsAdded(false);
    },
    [quantity]
  );
  return (
    <article style={obj.soldOut ? soldOutStyling : {}}>
      <div>
        <img src={imageUrl} alt={name} />
      </div>
      <div>
        <p>
          {name} {pizzaId}
        </p>
        <p>Ingredients: {ingredientsJoin(ingredients)}</p>
        <div>
          <p>{formatTotal(unitPrice)}</p>
          {soldOut && <span>Soldout</span>}
          {!soldOut && !isAdded && (
            <p
              onClick={() => {
                setIsAdded(true);
                dispatch(addPizza(newObject));
              }}
            >
              Add to Cart
            </p>
          )}
          {isAdded && !soldOut && (
            <div>
              <Quantity id={pizzaId} quantity={quantity} />
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export default Pizza;
