import { formatTotal, ingredients } from "../utils/helpers";
import Quantity from "./Quantity";

function Pizza({ obj }) {
  return (
    <article>
      <div>
        <img src={obj.imageUrl} alt={obj.name} />
      </div>
      <div>
        <p>{obj.name}</p>
        <p>Ingredients: {ingredients(obj.ingredients)}</p>
        <div>
          <p>{formatTotal(obj.unitPrice)}</p>
          <p>Add to Cart</p>
          {/* <div>
            <Quantity />
          </div> */}
        </div>
      </div>
    </article>
  );
}

export default Pizza;
