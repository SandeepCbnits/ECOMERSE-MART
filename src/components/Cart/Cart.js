import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import style from "./Cart.module.css";
const Cart = () => {
  const navigate= useNavigate()
  const [cartProduct, setCartProduct] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const products = async (product) => {    
    let fetchProduct = await fetch(
      `http://localhost:9092/products/getByProductId?pid=${product}`
    );
    let response = await fetchProduct.json();   
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
      }else{
        navigate("/addToCart", {replace:true })
        let response = await addToCart.json();
        console.log(response);
        
      }
    } catch (error) {     
      console.log(error)
    }
    
    
  };
  return (
    <div>
      <h3>Cart List</h3>
      <div>
        <div>
          <span>{cartProduct.description}</span>
          <div>
            <button onClick={() => addToCart()}>Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
