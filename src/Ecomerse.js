import React, { Fragment, useState, useEffect } from "react";
import EcomerseNavigator from "./Navigator/EcomerseNavigator";
import Header from "./components/Header/Header";

import data from "./Items";
import DropDownSection from "./components/Header/DropDownSection";

import { useNavigate } from "react-router-dom";

const Ecomerse = ({ title }) => {
  let navigate = useNavigate();
  let { items } = data;
  const [products, setProducts] = useState([]);
  // const [isLogedIn, setIsLogedIn] = useState(false);

  const [cartItems, setCartItems] = useState([]);
  const [wishLists, setWishLists] = useState([]);
  const [orderLists, setOrderLists] = useState([]);

  useEffect(()=>{
    let token = localStorage.getItem("TOKEN");
    if (!token) {
      navigate("/", {replace:true})   
    }

  },[])

  const addToCartHandler = (product) => {
    // if all ready have item
    let findExistingItem = cartItems.find((item) => item.id === product.id);

    if (findExistingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? {
                ...findExistingItem,
                quentety: findExistingItem.quentety + 1,
              }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quentety: 1 }]);
    }
  };

  // const isLogoutHandler = () => {
  //   setIsLogedIn(true);
  // };

  const addToWishListHandler = (product) => {
    let findExisting = wishLists.find((item) => item.id === product.id);

    if (findExisting) {
      setWishLists(
        wishLists.map((item) =>
          item.id === product.id
            ? {
                ...findExisting,
                quentety: findExisting.quentety + 1,
                title: title,
              }
            : item
        )
      );
    } else {
      setWishLists([...wishLists, { ...product, quentety: 1 }]);
    }
  };

  const removeToCartHandler = (product) => {
    let findExistingItem = cartItems.find((item) => item.id === product.id);

    if (findExistingItem.quentety === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? {
                ...findExistingItem,
                quentety: findExistingItem.quentety - 1,
              }
            : item
        )
      );
    }
  };

  // Order Your data
  const orderListHandler = (order) => {
    setOrderLists([...orderLists, { ...order, quentity: 1 }]);
  };

 
  return (
    <Fragment>
      <Header cartItems={cartItems} products={products} />
      
      <main>
        <EcomerseNavigator
          cartItems={cartItems}
          addToCartHandler={addToCartHandler}
          title={title}
          products={products}
          count={cartItems.length}
          // isLogedIn={isLogedIn}
          // setIsLogedIn={isLogoutHandler}
          setProducts={setProducts}
          addToWishListHandler={addToWishListHandler}
          wishLists={wishLists}
          items={items}
          removeToCartHandler={removeToCartHandler}
          orderLists={orderLists}
          orderListHandler={orderListHandler}
        />
      </main>
    </Fragment>
  );
};

export default Ecomerse;
