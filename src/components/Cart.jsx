function Cart(props) {
  const { quantity = 0, handleBasketShow = Function.prototype } = props;
  return (
    <div className="cart" onClick={handleBasketShow}>
      <i className="material-icons cart-icon">shopping_basket</i>
      {/* <i className="shoping-bag"> Shoping bag </i> */}
      <span className="cart-quantity">
        {/* {"("} */}
        {quantity ? <span className="cart-quantity">{quantity}</span> : null}
        {/* {")"} */}
      </span>
    </div>
  );
}

export { Cart };
