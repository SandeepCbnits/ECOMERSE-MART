import React, { useEffect } from "react";

import Product from "../components/Home/Product";
import style from "./HomePage.module.css";
const HomePage = ({
  products,
  setProducts,
  addToCartHandler,
  addToWishList,
}) => {
  let fetchProductData = async () => {
    let product = await fetch("http://localhost:9090/products");

    let responserData = await product.json();

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
    <div>
      <h3 className={style.title}>Created store for you </h3>
      <div className={style.container}>
        {products.map((product) => {
          return (
            <Product
              title={product.name}
              price={product.price}
              key={product.id}
              image={product.imageName}
              description={product.description}
              addToCartHandler={() => addToCartHandler(product)}
              addToWishList={() => addToWishList(product)}
              
            />
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
