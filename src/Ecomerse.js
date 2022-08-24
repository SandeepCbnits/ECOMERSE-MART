import React, { Fragment, useState, useEffect } from "react";
import EcomerseNavigator from "./Navigator/EcomerseNavigator";
import Header from "./components/Header/Header";

const Ecomerse = ({ title}) => {
  const [products, setProducts] = useState([]);
  const [isLogedIn, setIsLogedIn] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [wistListItems, setWishListItems] = useState([]);
  const [searchValue, setSearchValue]=useState()

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

  const addToWishList=(product)=>{
    let findExistingItem = wistListItems.find((item) => item.id === product.id);

    if (findExistingItem) {
      setWishListItems(
       wistListItems.map((item) =>
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
        setWishListItems([...cartItems, { ...product, quentety: 1 }]);
      }
  }
  const isLogoutHandler = () => {
    setIsLogedIn(true);
  };
 const onChangeHadler=async(item)=>{
  let product = await fetch(`http://localhost:9090/products/getByProductId/${item}`);

 console.log(product)
 }
 
  return (
    <Fragment>
      <Header cartItems={cartItems} isLogedIn={isLogedIn} searchValue={searchValue} onChangeHadler={onChangeHadler} />
      <main>
        <EcomerseNavigator
          cartItems={cartItems}
          addToCartHandler={addToCartHandler}
          title={title}
          products={products}
          isLogedIn={isLogedIn}
          setIsLogedIn={isLogoutHandler}
          setProducts={setProducts}
          addToWishList={addToWishList}
          searchValue={searchValue} 
          setSearchValue={setSearchValue}
          onChangeHadler={onChangeHadler}
        />
      </main>
    </Fragment>
  );
};

export default Ecomerse;
