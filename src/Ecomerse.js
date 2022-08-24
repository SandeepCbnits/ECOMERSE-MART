import React, { Fragment, useState, useEffect } from "react";
import EcomerseNavigator from "./Navigator/EcomerseNavigator";
import Header from "./components/Header/Header";
import data from "./Items";

const Ecomerse = ({ title }) => {
  const [products, setProducts] = useState([]);
  const [isLogedIn, setIsLogedIn] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addToCartHandler = (product) => {
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
  return (
    <Fragment>
      <Header cartItems={cartItems} isLogedIn={isLogedIn} />
      <main>
        <EcomerseNavigator
          cartItems={cartItems}
          addToCartHandler={addToCartHandler}
          title={title}
        products={products}
          isLogedIn={isLogedIn}
          setIsLogedIn={isLogoutHandler}
          setProducts={setProducts}
        
        />
      </main>
    </Fragment>
  );
};

export default Ecomerse;
