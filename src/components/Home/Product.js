import React from "react";
import style from "./Product.module.css";
const Product = ({
  addToCartHandler,
  image,
  title,
  price,
  description,
  rating,
  id,
  addToWishListHandler
}) => {
  return (
    <div className={style.product}>
      <img src={image} alt={title} />
      <div className={style.description}>
        <p className={style.des}>{description}</p>
        <p className={style.title}>{title}</p>
        <div className={style.product_rating}>
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
        <p className={style.price}>Rs.  {price}</p>
      </div>

      <div>
        <div className={style.wishList} title="add To Wish Lists">
        <i class="fa fa-heart" onClick={addToWishListHandler}></i>
        </div>
        <div className={style.product_actions}>
          <button className={style.buy}>BUY </button>
          <button title="AddToCart"
            className={style.add_cart}
            onClick={
              addToCartHandler
            }
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
