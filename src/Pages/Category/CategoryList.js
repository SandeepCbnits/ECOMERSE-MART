import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import style from './CategoryList.module.css'
const CategoryList = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  let categoryHandler = async (cid) => {
    let category = await fetch(
      `http://localhost:9092/categories/getByCid?cid=${cid}`
    );
    const response = await category.json();
console.log(response)
    setProducts(response.products);
    setCategory(response.categoryName);
  };

  useEffect(() => {
    categoryHandler(searchParams.get("cid"));
  }, []);

  return (
    <div className={style.categoryList}>
      {products.map((product) => (
        <div className={style.category}>
          <div className={style.categoryImage}>
            <img src={product.imageName} alt={product.name} />
            <button></button>
          </div>
          <div className={style.category_rightList}>
            <span>{product.description}</span> <br/>
            <span>Number of user rating</span>
            <div className={style.category_rightRating}>
            {Array(product.noOfUserRated)
              .fill()
              .map((_) => (
                <p>⭐</p>
              ))}
            </div>
            <span>Rs. {product.price}</span> <br/>
        
            <span>{product.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
