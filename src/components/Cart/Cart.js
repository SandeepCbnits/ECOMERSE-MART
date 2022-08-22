import React from "react";
import style from "./Cart.module.css";
const Cart = ({ cartItems }) => {
  return (
    <div>
      <h3>Cart List</h3>
      {cartItems.map((cart) => (
        <div className={style.container}>
          <img src={cart.image} alt={cart.title} />
          <span>{cart.description}</span>
          <span>{cart.title}</span>
          <span>{cart.price}</span>
          <span className={style. delete}>
            <i class="fa fa-trash-o"></i>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Cart;
