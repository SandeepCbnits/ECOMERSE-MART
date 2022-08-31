import React from "react";
import style from "./Cart.module.css";
const Cart = ({ cartItems, removeToCartHandler , count ,addToCartHandler }) => {


  return (
    <div>
      <h3>Cart List</h3>
      {cartItems.map((cart) => (
        <div className={style.container} key={cart.id}>
          <img src={cart.image} alt={cart.name} />
          <span>{cart.description}</span>
          <span>{cart.name}</span>
          <span>{cart.price * cart.quentety}</span>
          <span className={style.delete} >
            {/* <i class="fa fa-trash-o" ></i> */}
           
          </span>
          <button onClick={()=>removeToCartHandler(cart)}>-</button>
          <span> {cart.quentety}</span>
          <button onClick={()=>addToCartHandler(cart)}>+</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
