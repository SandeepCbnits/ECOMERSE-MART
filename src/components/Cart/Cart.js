import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import style from "./Cart.module.css";
const Cart = ({ cartItems, removeToCartHandler , count ,addToCartHandler }) => {
const [cartProducts, setCartProducts]=useState([]);
const [searchParams, setSearchParams]=useSearchParams();
const products=async()=>{
 let token= localStorage.getItem("TOKEN")
//   let cart = await fetch("http://localhost:9092/cart/eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJTYW5kZWVwIiwiZXhwIjoxNjYyNTUzNzI4LCJpYXQiOjE2NjI1NTI4Mjh9.j0jZuiLAUHcqJJNGHQwudjTYTRoKfVp0ZvFFir5qIFD6Cp_qSpXl1VLb1H3zFm6g9-tGdU64f3DI1EHbQ0g5Rg");
//   let response = await cart.json();
//   console.log(response)
//   setCartProducts(response)
 }

useEffect(()=>{
products()
},[])
  return (
    <div>
      <h3>Cart List</h3>
      {cartProducts.map((cart) => (
        <span>{cart.name}</span>
        
      ))}
    </div>
  );
};

export default Cart;
