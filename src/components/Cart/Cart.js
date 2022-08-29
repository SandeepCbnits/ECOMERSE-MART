import React from "react";
import style from "./Cart.module.css";
const Cart = ({ cartItems, removeToCartHandler  }) => {
  return (
    <div>
      <h3>Cart List</h3>
      {cartItems.map((cart) => (
        <div className={style.container}>
          <img src={cart.image} alt={cart.name} />
          <span>{cart.description}</span>
          <span>{cart.name}</span>
          <span>{cart.price}</span>
          <span className={style.delete} >
            <i class="fa fa-trash-o" onClick={()=>removeToCartHandler(cart)}></i>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Cart;
