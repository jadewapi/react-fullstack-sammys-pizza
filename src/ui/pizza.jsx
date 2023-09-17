import { useDispatch, useSelector } from "react-redux";
import { formatTotal, ingredientsJoin } from "../utils/helpers";
import Quantity from "./Quantity";
import { addPizzaToCart, getPizzaQuantity } from "../features/cart/cartSlice";
import { useState } from "react";

const soldOutStyling = {
  filter: "grayscale(1)",
  opacity: "20%",
};

function Pizza({ obj }) {
  const pizzaQuantity = useSelector((state) => getPizzaQuantity(obj.id)(state));
  const { id, ingredients, name, unitPrice } = obj;
  const pizzaObj = {
    id,
    ingredients,
    name,
    unitPrice,
    quantity: 1,
    totalPrice: unitPrice,
  };
  const dispatch = useDispatch();
  const [added, setAdded] = useState(false);
  return (
    <article style={obj.soldOut ? soldOutStyling : {}}>
      <div>
        <img src={obj.imageUrl} alt={obj.name} />
      </div>
      <div>
        <p>{obj.name}</p>
        <p>Ingredients: {ingredientsJoin(obj.ingredients)}</p>
        <div>
          <p>{formatTotal(obj.unitPrice)}</p>
          {obj.soldOut && <span>Soldout</span>}
          {!obj.soldOut && !added && (
            <p
              onClick={() => {
                dispatch(addPizzaToCart(pizzaObj));
                setAdded(true);
              }}
            >
              Add to Cart
            </p>
          )}
          {added && (
            <div>
              <Quantity setAdded={setAdded} />
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export default Pizza;
