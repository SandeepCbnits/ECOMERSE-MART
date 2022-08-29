import React, { Fragment, useState, useEffect } from "react";
import EcomerseNavigator from "./Navigator/EcomerseNavigator";
import Header from "./components/Header/Header";
import { useSelector } from "react-redux";
import data from "./Items";

const Ecomerse = ({ title, quantity }) => {
 let {items}=data;
  const [products, setProducts] = useState([]);
  // const [isLogedIn, setIsLogedIn] = useState(false);
  const [profile, setProfile]=useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [wishLists, setWishLists] = useState([]);
const [orderLists, setOrderLists]=useState([])

  const addToCartHandler = async (product) => {
    // if all ready have item
    let findExistingItem = cartItems.find((item) => item.id === product.id);

    if (findExistingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? {
                ...findExistingItem,
                quentety: findExistingItem.quentety + 1,
                title: title,
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
    let findExisting = wishLists.find((item) => item.id === product.id );

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
    const productsEx = cartItems.find((list) => list.id === product.id);

    if (productsEx.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id)); 
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productsEx, quantity: productsEx.quantity - 1 }
            : item
        )
      );
    }
  };
 const orderListHandler=(order)=>{
setOrderLists([...orderLists, {...order, quentity:1}])
 }
  return (
    <Fragment>
     
      <Header cartItems={cartItems}  products={products}  />
      
      <main>
        <EcomerseNavigator
          cartItems={cartItems}
          addToCartHandler={addToCartHandler}
          title={title}
          products={products}
          count={orderLists.length}
          // isLogedIn={isLogedIn}
          // setIsLogedIn={isLogoutHandler}
          setProducts={setProducts}
          addToWishListHandler={addToWishListHandler}
          wishLists={wishLists}
          profile={profile}
          setProfile={setProfile}
          items={items}
          removeToCartHandler ={removeToCartHandler }
          orderLists={orderLists}
          orderListHandler={orderListHandler}
        />
      </main>
    </Fragment>
  );
};

export default Ecomerse;
