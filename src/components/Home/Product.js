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
      <div>
        <p className={style.descreption}>{description}</p>
        <p className={style.title}>{title}</p>
        <div className={style.product_rating}>
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
        <p>{price}</p>
      </div>

      <div>
        <div className={style.wishList} onClick={addToWishListHandler} title="add To Wish Lists">
        <i class="fa fa-heart" ></i>
        </div>
        <div className={style.product_actions}>
          <button className={style.buy}>BUY </button>
          <button title="Add To Cart"
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
