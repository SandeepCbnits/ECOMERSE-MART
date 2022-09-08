import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useSearchParams } from "react-router-dom";
import style from "./Cart.module.css";
const Cart = () => {
  const navigate = useNavigate();
  const [cartProduct, setCartProduct] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const products = async (product) => {
    let fetchProduct = await fetch(
      `http://localhost:9092/products/getByProductId?pid=${product}`
    );
    let response = await fetchProduct.json();
    console.log(response)
    setCartProduct(response);
  };

  useEffect(() => {
    products(searchParams.get("product"));
  }, []);

  const addToCart = async () => {
    let token = localStorage.getItem("TOKEN");
    try {
      let addToCart = await fetch(
        `http://localhost:9092/cart/addToCart/${token}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            productId: 2,
            quantity: 2,
          }),
        }
      );
      if (!addToCart.ok) {
        console.log("Somthing Went Worng!!");
      } else {
        navigate("/addToCart", { replace: true });
        let response = await addToCart.json();
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h3>Shoping Cart</h3>
      <div className={style.container}>
        <div className={style.cart_container}>
          <div className={style.cart_leftContainer}>
            <img src={cartProduct.imageName} alt={cartProduct.name} />
          </div>
          <div className={style.description}>            
            <span className={style.cart_name}>{cartProduct.name}</span>
          </div>
          <div className={style.cart_rightContainer}>
            <div className={style.cart_rating}>
              <span>
                Rs. <br />
                <stron className={style.cart_price}>{cartProduct.price}</stron>
              </span>
              <div className={style.cart_actionsButton}>
                <button>-</button>
                <span>0</span>
                <button>+</button>
              </div>
              <span>
                Total Price <br />
                <strong className={style.cart_price}>0</strong>
              </span>
            </div>
          </div>
        </div>
        <div className={style.cart_right}>
          <h4>ORDER SUMMERY</h4>          
          <div className={style.totla_cast}>
          <span>TOTAL CAST</span>
          <span>0</span> 
          </div>
          <button className={style.buy_button}>BUY NOW</button>
        </div>
      </div>
      <div className={style.cart_actions}>
        <NavLink to="/home">CONTINEW SOPPING</NavLink>
      </div>
    </div>
  );
};

export default Cart;
