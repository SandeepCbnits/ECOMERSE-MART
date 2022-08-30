import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import style from "./Category.module.css";
import cat1 from "../../assests/cat1.jpg";
import cat2 from "../../assests/cat2.jpeg";
import cat3 from "../../assests/cat3.jpg";
import cat4 from "../../assests/cat4.jpg";
const Category = () => {
  const [categorys, setCategorys] = useState([]);
  const [products, setProducts] = useState([]);
  const navigation = useNavigate();

  let categoryHandler = async () => {
    let category = await fetch(
      "http://localhost:9999/categories/getAllCategories"
    );
    const response = await category.json();
    if (response?.length) {
      setCategorys(response);
      setProducts(response);
    }
    console.log(response);
  };
  useEffect(() => {
    categoryHandler();
  }, []);


  const onClickHandler=(pro)=>{
   
    navigation("/category-lists", {replace:"true"})
    
  }
 
  //Components, props
  return (
    <div>
      <h1>Shop By Category</h1>
      <div>
        {categorys?.map((el) => {
          return (
            <div >
              <h1>{el.categoryName}</h1>
              <div className={style.container}>

             
              {products.map((pro) => {
                return (
                  <span>
                    {pro.products.map((pro) => {
                      return (
                        <div className={style.category}>
                          <img
                            className={style.Images}
                            src={pro.imageName}
                            alt=""
                          /> <br />
                          <h3>{pro.name}</h3> 
                          <span>{pro.description}</span> <br />
                          <span>Rs. <strong> {pro.price}</strong> </span> <br />
                          <div className={style.categoryActions}>
                           <button onClick={()=>onClickHandler(pro)}>Category List</button> 
                            
                          </div>
                        </div>
                      );
                    })}
                  </span>
                );
              })}
               </div>
            </div>
          );
        })}
      </div>
      {/* <div className={style.container}>
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
       </div> */}
    </div>
  );
};

export default Category;
