import React from "react";
import style from "./Checkout.module.css";
const CheckOut = ({ orderLists, count }) => {
  const totalPrice = orderLists.reduce(
    (price, item) => price + item.quentity * item.price,
    0
  );
  return (
    <div>
      <h3>Your Shoping Cart !</h3>
      <div className={style.container}>

    <div>

  
      {orderLists.map((list) => (
        <div className={style.leftSideitems}>
          <span>{list.description}</span> <br />
          <img src={list.image} alt="" /> <br />
          <span>{list.price}</span>
        </div>
      ))}
        </div>
      <div className={style.rightSideitems}>
      <span>
        Sub Total {count} {totalPrice}
      </span>{" "}
      <br />
      <button>Payout</button>

      </div>
      </div>
    </div>
  );
};

export default CheckOut;
