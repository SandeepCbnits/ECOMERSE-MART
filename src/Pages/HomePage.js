import React from "react";

import Product from "../components/Home/Product";
import style from "./HomePage.module.css";
const HomePage = ({addToCartHandler, items}) => {

 
// useEffect(() => {
//   let getDataAsync= async()=>{
//     let  fetchData = await fetch("http://localhost:3000/")
//     let responceData = await fetchData.json();
   
//     setData(responceData.message)
//   }

// getDataAsync()
// }, [])

  return (
    <div>
      <h3 className={style.title}>Created store for you </h3>
      <div className={style.container}>
        {items.map((item)=>{
          return (
            <Product
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
            price={item.price}
            rating={item.rating}
            addToCartHandler={()=>addToCartHandler(item)}
          />
          )
        })}
       
      </div>
    </div>
  );
};

export default HomePage;
