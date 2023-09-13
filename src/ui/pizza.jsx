function Pizza({ obj }) {
  return (
    <article>
      <div>
        <img src={obj.imageUrl} alt={obj.name} />
      </div>
      <div>
        <p>{obj.name}</p>
        <p>Ingredients: {obj.ingredients.join(", ")}</p>
        <div>
          <p>{obj.unitPrice}</p>
          <p>Add to Cart</p>
        </div>
      </div>
    </article>
  );
}

export default Pizza;
