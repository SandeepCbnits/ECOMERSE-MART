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
        <div>
          <button>AddToWishList</button>
        </div>
        <div className={style.product_actions}>
          <button className={style.buy}>BUY NOW</button>
          <button
            className={style.add_cart}
            onClick={() => {
              addToCartHandler(id);
            }}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
