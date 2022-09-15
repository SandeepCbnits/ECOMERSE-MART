import React from "react";
import style from "./WishList.module.css";
const WishList = () => {
  return (
    <div>
      <h3>Cart List</h3>
      {/* {wishLists.map((cart) => (
        <div className={style.container}>
          <img src={cart.image} alt={cart.name} />          
          <span>{cart.name}</span>
          <span>{cart.price}</span>
          <span className={style.delete}>
            <i class="fa fa-trash-o"></i>
          </span>
        </div>
      ))} */}
    </div>
  );
};

export default WishList;
