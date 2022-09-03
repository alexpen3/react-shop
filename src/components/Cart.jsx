import { useContext } from "react";
import { ShopContext } from "../context";

function Cart() {
  const { order, handleBasketShow = Function.prototype } =
    useContext(ShopContext);

  const quantity = order.length;
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
