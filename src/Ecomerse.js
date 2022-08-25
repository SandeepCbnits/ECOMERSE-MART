import React, { Fragment, useState, useEffect } from "react";
import EcomerseNavigator from "./Navigator/EcomerseNavigator";
import Header from "./components/Header/Header";

const Ecomerse = ({ title }) => {
  const [products, setProducts] = useState([]);
  const [isLogedIn, setIsLogedIn] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [wishLists, setWishLists] = useState([]);

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

  const isLogoutHandler = () => {
    setIsLogedIn(true);
  };

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
  return (
    <Fragment>
      <Header cartItems={cartItems} isLogedIn={isLogedIn} products={products}/>
      <main>
        <EcomerseNavigator
          cartItems={cartItems}
          addToCartHandler={addToCartHandler}
          title={title}
          products={products}
          isLogedIn={isLogedIn}
          setIsLogedIn={isLogoutHandler}
          setProducts={setProducts}
          addToWishListHandler={addToWishListHandler}
          wishLists={wishLists}
        />
      </main>
    </Fragment>
  );
};

export default Ecomerse;
