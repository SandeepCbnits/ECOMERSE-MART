import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import style from "./CategoryList.module.css";

const CategoryList = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  let categoryHandler = async (cid) => {
    let category = await fetch(
      `http://localhost:9092/categories/getByCid?cid=${cid}`
    );
    const response = await category.json();
    console.log(response);
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
            <img src={product.imageName} alt={product.name} /> <br />
            <span className={style.category_cart}>
              <button>Buy Cart</button>
              <button>Add To Cart</button>
            </span>
          </div>
          <div className={style.category_rightList}>
            <span>{product.description}</span> <br />
            <div className={style.category_rightRating}>
              <span className={style.category_rating}>
                Number of user rating
              </span>
              {Array(product.noOfUserRated)
                .fill()
                .map((_) => (
                  <p>⭐</p>
                ))}
            </div>
            <span>Rs. <strong className={style.category_price}>{product.price}</strong></span>{" "}
            <br /> <br/>
            <span>{product.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
