import { useEffect, useContext } from "react";
import { Preloader } from "./Preloader";
import { GoodsList } from "./GoodsList";
import { Cart } from "./Cart";
import { BasketList } from "./BasketList";
import { Alert } from "./Alert";
import { ShopContext } from "../context";

function Shop() {
  const { loading, order, isBasketShow, alertName, setGoods } =
    useContext(ShopContext);

  console.log(order);

  // const closeAlert = () => {
  //   setAlertName("");
  // };

  // const incQuantity = (itemId) => {
  //   const newOrder = order.map((el) => {
  //     if (el.id === itemId) {
  //       const newQuantity = el.quantity + 1;
  //       return {
  //         ...el,
  //         quantity: newQuantity,
  //       };
  //     } else {
  //       return el;
  //     }
  //   });
  //   setOrder(newOrder);
  // };

  // const decQuantity = (itemId) => {
  //   const newOrder = order.map((el) => {
  //     if (el.id === itemId) {
  //       const newQuantity = el.quantity - 1;
  //       return {
  //         ...el,
  //         quantity: newQuantity >= 0 ? newQuantity : 0,
  //       };
  //     } else {
  //       return el;
  //     }
  //   });
  //   setOrder(newOrder);
  // };
  // const removeFromBasket = (itemId) => {
  //   const newOrder = order.filter((el) => el.id !== itemId);
  //   setOrder(newOrder);
  // };

  // const handleBasketShow = () => {
  //   setBasketShow(!isBasketShow);
  // };

  useEffect(function getGoods() {
    fetch("https://fortniteapi.io/v2/shop?lang=en", {
      headers: { Authorization: "16ee3087-bf0c73a9-b064b115-61681a6f" },
    })
      .then((response) => response.json())
      .then((data) => {
        setGoods(data.shop);
      });
    //eslint-disable-next-line
  }, []);
  return (
    <main className="container content">
      <Cart quantity={order.length} />
      {loading ? <Preloader /> : <GoodsList />}
      {isBasketShow && <BasketList />}

      {alertName && <Alert />}
    </main>
  );
}

export { Shop };
