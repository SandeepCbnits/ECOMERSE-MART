import axios from "axios";
import React, { useEffect, useState } from "react";
import {  useNavigate, useSearchParams } from "react-router-dom";
import style from "./ProductDetailPage.module.css";
const ProductDetailPage = () => {
  const navigate = useNavigate();
  const [cartDetailProduct, setcartDetailProduct] = useState({
    productId:2,
    quantity:1
  });
  const [searchParams, setSearchParams] = useSearchParams();

  const products = async (product) => {
    let fetchProduct = await fetch(
      `http://localhost:9092/products/getByProductId?pid=${product}`
    );
    let response = await fetchProduct.json();  
    console.log(response) 
    setcartDetailProduct(response);
  };

  useEffect(() => {
    products(searchParams.get("product"));
   
  }, []);

  const addToCart = async (product) => {
    let token = localStorage.getItem("TOKEN");
    axios.post(`http://localhost:9092/cart/addToCart/${token}`,{ productId: product, quantity: 1}).then((res)=>{
      console.log(res.data)
      navigate(`/addToCart?cart=${product}`, { replace: true });
    }).catch((err)=>console.log(err) )   
  };
  // const addToCart = (product) => {   
  // // /productDetail
  // navigate(`/cart?product=${product}`, {replace:true});
  //   //navigate(`/productDetail?product=${product}`, {replace:true});
  // };
  return (
    <div key={cartDetailProduct.pid}>
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
          <span className={style.cartDetail_rs}>
            Rs. 
            <strong className={style.cartDetail_price}>
            {cartDetailProduct.price}
            </strong>
          
          </span>{" "}
          <br />
          <span className={style.cartDetail_rating}>
            {Array(4)
              .fill()
              .map((_) => (                
                <span title="Rating of Products">⭐</span>
              ))}
              <p>Rating of Products </p>
          </span>{" "}
          <br />
          <span className={style.cartDetail_desctiption}>
            {cartDetailProduct.description}
          </span>{" "}
          <br />
          <div className={style.cartDetail_button}>
          <span >
            <button onClick={() =>addToCart(cartDetailProduct.pid)}>ADD TO CART</button>
          </span>
          <span >
            <button >Buy Now</button>
          </span>
          </div>
          <div className={style.cartDetail_specification}>
            <h2 className={style.cartDetail_specifi} >SPECIFICATIONS</h2> <br/>
            <span className={style.cartDetail_general}>General</span> <br/>
           <div className={style.genral}>
            <span>Modal Name : 66E9KAC4IN </span> <br/>
            <span>Color : Raven Black</span> <br/>
            <span>Display : 49.53 cm 19.5 Inch LCD Display</span> <br/>
            <span>Series :D-Series</span>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
