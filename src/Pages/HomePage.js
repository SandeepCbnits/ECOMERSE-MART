import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Product from "../components/Home/Product";
import style from "./HomePage.module.css";
const HomePage = ({
  products,
  setProducts,
  addToCartHandler,
  addToWishListHandler,
  items,
  orderListHandler
 
}) => {
  let navigate = useNavigate();
  let fetchProductData = async () => {
    let product = await fetch("http://localhost:9090/products/");

    let responserData = await product.json();
    console.log(responserData);
    setProducts(responserData);
  };

  // const onChangeHadler = async (product) => {
  //   let search = await fetch("http://localhost:9090/products/getByProductId", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       id: product.pid,
  //     }),
  //   });
  //   let responce = await search.json();
  //   console.log(responce);

  // };
  useEffect(() => {
    fetchProductData();
  }, []);
  return (
    <div >
      {/* <div  >

      <img className={style.image} src="https://m.media-amazon.com/images/I/61tk4B-Bx+L._SX3000_.jpg" alt="" />
      </div> */}
      <div className={style.container}>
        {items.map((product) => {
          return (            
            <Product
              title={product.name}
              price={product.price}
              key={product.id}
              image={product.image}
              rating={product.rating}
              description={product.description}
              addToCartHandler={() => addToCartHandler(product)}
              addToWishListHandler={() => addToWishListHandler(product)}  
              orderListHandler={()=>orderListHandler(product)}        />
          
          );
        })}
        {/* {products.map((item)=>{
          return (
            <Product
            title={item.name}
            // key={item.id}
            // id={item.id}
            // image={item.image}
            // title={item.title}
            // description={item.description}
            // price={item.price}
            // rating={item.rating}
            // addToCartHandler={()=>addToCartHandler(item)}
          />
          )
        })}  */}
      </div>
    </div>
  );
};

export default HomePage;
