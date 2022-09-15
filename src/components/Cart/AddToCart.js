import React, { useState } from "react";
import { useEffect } from "react";

const AddToCart = () => {
  const [carts, setCarts] = useState([]);
  localStorage.setItem("QUENTITY", carts)

  let token = localStorage.getItem("TOKEN");
  let addTo = async () => {
    let cart = await fetch(`http://localhost:9092/cart/${token}`);
    let response = await cart.json();
    console.log(response.cartItems);
    setCarts(response.cartItems);
  };
  useEffect(() => {
    addTo();
  }, []);
  return (
    <div>
      {carts.map((cart) => {
        return (
          <div>
            <h3>{cart.product.name}</h3>
            <div>
              <button>-</button>
              <span>{cart.quantity}</span>
              <button>+ </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AddToCart;
