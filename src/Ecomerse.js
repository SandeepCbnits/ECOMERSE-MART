import React, { Fragment, useState, useEffect } from "react";
import EcomerseNavigator from "./Navigator/EcomerseNavigator";
import Header from "./components/Header/Header";
import { useNavigate } from "react-router-dom";

const Ecomerse = ({ title,shopByCategory }) => {
  let navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
 
  const [orderLists, setOrderLists] = useState([]);

  useEffect(()=>{
    let token = localStorage.getItem("TOKEN");
    if (!token) {
      navigate("/", {replace:true})   
    }
  },[])

  const addToCartHandler = (product) => {   
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
          setProducts={setProducts}          
       
          removeToCartHandler={removeToCartHandler}
          orderLists={orderLists}
          orderListHandler={orderListHandler}
          shopByCategory={shopByCategory}
        />
      </main>
    </Fragment>
  );
};

export default Ecomerse;
