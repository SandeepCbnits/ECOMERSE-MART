import React, { useEffect, useState } from "react";
import ImageSlider from "../components/Slider/ImageSlider";
import style from "./HomePage.module.css";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  let fetchProduct = async () => {
    let product = await fetch("http://localhost:9092/products");
    let response = await product.json();
    setProducts(response);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const addToCart=async (product)=>{
//   let addInCart = await fetch(`http://localhost:9092/cart/addToCart/${product}`,{
//   method:"POST",
//   headers:{
//     "Content-Type":"application/json"
//   },
//   body: JSON.stringify({
    
//   })
// })
// let cart = await addInCart.json()
console.log(product)
  }
  return (
    <div>
      <ImageSlider />
      <div className={style.product_container}>
        {products.map((product) => (
          <div className={style.container}>
            <img
              className={style.image}
              src={product.imageName}
              alt={product.name}
            />
            <div className={style.product_bottom}>
              <span className={style.product_name}>{product.name}</span> <br />
              <span className={style.product_price}>Rs. {product.price}</span>
            </div>
            <div className={style.product_actions}>
              <button className={style.product_buy}>Buy</button>
              <button className={style.product_addtocart} onClick={()=>addToCart(product)}>Add To Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
