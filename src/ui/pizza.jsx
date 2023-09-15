import { formatTotal, ingredients } from "../utils/helpers";
import Quantity from "./Quantity";

const soldOutStyling = {
  filter: "grayscale(1)",
  opacity: "20%",
};

function Pizza({ obj }) {
  return (
    <article style={obj.soldOut ? soldOutStyling : {}}>
      <div>
        <img src={obj.imageUrl} alt={obj.name} />
      </div>
      <div>
        <p>{obj.name}</p>
        <p>Ingredients: {ingredients(obj.ingredients)}</p>
        <div>
          <p>{formatTotal(obj.unitPrice)}</p>
          {obj.soldOut && <span>Soldout</span>}
          {!obj.soldOut && <p>Add to Cart</p>}
          {/* <div>
            <Quantity />
          </div> */}
        </div>
      </div>
    </article>
  );
}

export default Pizza;
