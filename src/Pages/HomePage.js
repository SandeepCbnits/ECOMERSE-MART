import React, { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import ImageSlider from "../components/Slider/ImageSlider";
import style from "./HomePage.module.css";

const HomePage = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  let fetchProduct = async () => {
    let product = await fetch("http://localhost:9092/products");
    let response = await product.json();
    setProducts(response);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  // const addToCart=async (product)=>{
  //   console.log(product.pid)
  // //   let token = localStorage.getItem("TOKEN")
  // //   let addToCart = await fetch(`http://localhost:9092/cart/addToCart/${token}`,{
  // //     method:"POST",
  // //     headers:{
  // //       "Content-Type":"application/json",
  // //       // 'Accept': 'application/json'
  // //     },
  // //      body: JSON.stringify({
  // //       productId:2,
  // //       quantity:2
  // //     })
  // //   })
  // // let response = await addToCart.json();
  // // console.log(response)
  // }

  const addToProduct = (product) => {    
    // /productDetail
   //navigate(`/cart?product=${product}`, {replace:true});
    navigate(`/productDetail?product=${product}`, {replace:true});
  };
  return (
    <div>
      <ImageSlider />
      <div className={style.product_container}>
        {products.map((product) => (
          <div
            onClick={() => addToProduct(product.pid)}
            className={style.container}
          >
            <img
              className={style.image}
              src={product.imageName}
              alt={product.name}
            />
            <div className={style.product_bottom}>
              <span className={style.product_name}>{product.name}</span> <br />
              <span>
                Rs.{" "}
                <stron className={style.product_price}>{product.price}</stron>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
