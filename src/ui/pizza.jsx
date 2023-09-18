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
  const { imageUrl, soldout, name, ingredients, unitPrice, id } = obj;
  const newObject = {
    id,
    name,
    ingredients,
    unitPrice,
    totalPrice: unitPrice,
    quantity: 1,
  };
  const dispatch = useDispatch();
  const quantity = useSelector((state) => getQuantity(id)(state));
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
        <p>{name}</p>
        <p>Ingredients: {ingredientsJoin(ingredients)}</p>
        <div>
          <p>{formatTotal(unitPrice)}</p>
          {soldout && <span>Soldout</span>}
          {!soldout && !isAdded && (
            <p
              onClick={() => {
                setIsAdded(true);
                dispatch(addPizza(newObject));
              }}
            >
              Add to Cart
            </p>
          )}
          {isAdded && !soldout && (
            <div>
              <Quantity setIsAdded={setIsAdded} id={id} quantity={quantity} />
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export default Pizza;
