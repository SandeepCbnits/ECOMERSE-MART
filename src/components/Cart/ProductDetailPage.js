import React, { useEffect, useState } from "react";
import {  useNavigate, useSearchParams } from "react-router-dom";
import style from "./ProductDetailPage.module.css";
const ProductDetailPage = () => {
  const navigate = useNavigate();
  const [cartDetailProduct, setcartDetailProduct] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const products = async (product) => {
    let fetchProduct = await fetch(
      `http://localhost:9092/products/getByProductId?pid=${product}`
    );
    let response = await fetchProduct.json();
    console.log(response);
    setcartDetailProduct(response);
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
  const addToProduct = (product) => {    
    // /productDetail
   navigate(`/cart?product=${product}`, {replace:true});
    //navigate(`/productDetail?product=${product}`, {replace:true});
  };
  return (
    <div>
      <h3>Shopping Detail </h3>
      <div className={style.productDetail_container}>
        <div className={style.product_imageContainer}>
          <img src={cartDetailProduct.imageName} alt={cartDetailProduct.name} />
        </div>
        <div className={style.product_rightContainer}>
          <span className={style.cartDetail_name}>
            {cartDetailProduct.name}
          </span>{" "}
          <br />
          <span className={style.cartDetail_price}>
            Rs. {cartDetailProduct.price}
          </span>{" "}
          <br />
          <span className={style.cartDetail_rating}>
            {Array(4)
              .fill()
              .map((_) => (
                <span title="Rating of Products"> ⭐ </span>
              ))}
          </span>{" "}
          <br />
          <span className={style.cartDetail_desctiption}>
            {cartDetailProduct.description}
          </span>{" "}
          <br />
          <p> </p>
          <span>
            <button onClick={() => addToProduct(cartDetailProduct.pid)}>ADD TO CART</button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
