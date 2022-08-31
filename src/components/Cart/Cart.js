import React from "react";
import style from "./Cart.module.css";
const Cart = ({ cartItems, removeToCartHandler   }) => {


  return (
    <div>
      <h3>Cart List</h3>
      {cartItems.map((cart) => (
        <div className={style.container} key={cart.id}>
          <img src={cart.image} alt={cart.name} />
          <span>{cart.description}</span>
          <span>{cart.name}</span>
          <span>{cart.price}</span>
          <span className={style.delete} onClick={()=>removeToCartHandler(cart)}>
            <i class="fa fa-trash-o" ></i>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Cart;
