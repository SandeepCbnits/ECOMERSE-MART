import React, { useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import DropDownSection from "../components/Header/DropDownSection";

import Product from "../components/Home/Product";
import ImageSlider from "../components/Slider/ImageSlider";
import style from "./HomePage.module.css";
const HomePage = ({
  products,
  setProducts,
  addToCartHandler,
  addToWishListHandler,
  items,
  orderListHandler,
  removeToCartHandler 
 
}) => {
  let navigate = useNavigate();
  let fetchProductData = async () => {
    // let product = await fetch("http://localhost:9090/products/");

    // let responserData = await product.json();
    // console.log(responserData);
    // setProducts(responserData);
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
     
      <DropDownSection/>
      <div>
        <ImageSlider/>
      </div>
      {/* <div  >
      

      <img className={style.image} src="https://m.media-amazon.com/images/I/61tk4B-Bx+L._SX3000_.jpg" alt="" />
      </div> */}
      <div className={style.container}>
        {items.map((product) => {
          return (            
          <div className={style.product}>
            <img src={product.image} alt={product.title} />
            <p>{product.description}</p>
            <div className={style.product_rating}>
            {Array(product.rating)
              .fill()
              .map((_) => (
                <p>⭐</p>
              ))}
          </div>
            <p>Rs. {product.price}</p>
            <div className={style.product_actions}>
            <button className={style.buy} onClick={()=>orderListHandler(product)}>
              <NavLink to="/checkout">BUY </NavLink>
            </button>
            <button
              title="Add To Cart"
              className={style.add_cart}
              onClick={()=>addToCartHandler(product)}
            >
              +
            </button>
            
            <i class="fa fa-heart" title="Add To WisLists" onClick={()=>addToWishListHandler(product)}></i>
         
          </div>
          </div>
          
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
