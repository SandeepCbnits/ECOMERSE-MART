import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./Category.module.css";
import cat1 from "../../assests/cat1.jpg";
import cat2 from "../../assests/cat2.jpeg";
import cat3 from "../../assests/cat3.jpg";
import cat4 from "../../assests/cat4.jpg";
const Category = () => {
  const navigation= useNavigate()
  return (
    <div>
      <h1>Shop By Category</h1>
      <div className={style.container}>
        <div className={style.categoryList}>
        <img className={style.Images} src={cat1} alt="loading..." />
        <br />
        <button className={style.buttons} onClick={()=>{ navigation("/home-kitchen", {replace: true} )}}>Home & Kitchen</button>
     
        </div>
        <div className={style.categoryList}>
        <img className={style.Images} src={cat2} alt="loading..." />
        <br />
        <button className={style.buttons} onClick={()=>{ navigation("/home-kitchen", {replace: true} )}}>Furniture</button>
     
        </div>
        <div className={style.categoryList}>
        <img className={style.Images} src={cat3} alt="loading..." />
        <br />
        <button className={style.buttons} onClick={()=>{ navigation("/home-kitchen", {replace: true} )}}>Sports & Fitness</button>
     
        </div>
        <div className={style.categoryList}>
        <img className={style.Images} src={cat4} alt="loading..." />
        <br />
        <button className={style.buttons} onClick={()=>{ navigation("/home-kitchen", {replace: true} )}}>Bags, Wallets & Luggage</button>
     
        </div>
       </div>
    </div>
  );
};

export default Category;
