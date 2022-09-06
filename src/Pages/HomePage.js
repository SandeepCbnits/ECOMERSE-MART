import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import ImageSlider from "../components/Slider/ImageSlider";
import style from "./HomePage.module.css";

const HomePage = ({
  addToCartHandler,
  addToWishListHandler,
  items,
  orderListHandler,
}) => {
  let fetchProductData = async () => {};

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div>
      <ImageSlider />
      <div className={style.productContainer}>
        {items.map((product) => {
          return (
            <div className={style.productList}>
              <img src={product.image} alt={product.title} />
              <p>{product.description}</p>
              <div className={style.rating}>
                {Array(product.rating)
                  .fill()
                  .map((_) => (
                    <p>⭐</p>
                  ))}
              </div>
              <p>Rs. {product.price}</p>
              <div className={style.actions}>
                <button
                  className={style.buy}
                  onClick={() => orderListHandler(product)}
                >
                  <NavLink to="/checkout">BUY </NavLink>
                </button>
                <button
                  title="Add To Cart"
                  className={style.cart}
                  onClick={() => addToCartHandler(product)}
                >
                  +
                </button>
                <i
                  class="fa fa-heart"
                  title="Add To WisLists"
                  onClick={() => addToWishListHandler(product)}
                ></i>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
