function BasketItem(props) {
  const {
    id,
    displayName,
    displayAssets,
    finalPrice,
    quantity,
    removeFromBasket = Function.prototype,
    incQuantity = Function.prototype,
    decQuantity = Function.prototype,
  } = props;

  return (
    <ul className="collction basket">
      <div className="collection-item avatar">
        <img
          src={displayAssets[0].full_background}
          alt={displayName}
          className="circle"
        />

        <li className="collection-item basket">
          <div>
            {displayName}
            <i
              className="material-icons basket-quantity"
              onClick={() => decQuantity(id)}
            >
              remove
            </i>{" "}
            {quantity}{" "}
            <i
              className="material-icons basket-quantity"
              onClick={() => incQuantity(id)}
            >
              add
            </i>{" "}
            = {finalPrice * quantity} $
          </div>
          <span
            className="secondary-content"
            onClick={() => removeFromBasket(id)}
          >
            <i className="basket-delete">Delete that product</i>
          </span>
        </li>
      </div>
    </ul>
  );
}

export { BasketItem };
