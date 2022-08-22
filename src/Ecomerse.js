import React, { Fragment, useState } from "react";
import EcomerseNavigator from "./Navigator/EcomerseNavigator";
import Header from "./components/Header/Header";
import data from "./Items";

const Ecomerse = ({ title }) => {
  const { items } = data;
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
  return (
    <Fragment>
      <Header cartItems={cartItems} />
      <main>
        <EcomerseNavigator
          cartItems={cartItems}
          addToCartHandler={addToCartHandler}
          title={title}
          items={items}
        />
      </main>
    </Fragment>
  );
};

export default Ecomerse;
