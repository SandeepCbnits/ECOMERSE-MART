import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./Crousel.module.css";
import Slider from "react-slick";

const Crousel = () => {
  const [categorys, setCategorys] = useState([]);
  const [products, setProducts] = useState([]);

  let categoryHandler = async () => {
    let category = await fetch(
      "http://localhost:9092/categories/getAllCategories"
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

  return (
    <div className={style.container}>
      {categorys.map((cate) => (
        <div>
          <span>{cate.categoryName}</span>
          {categorys.map((pro) => (
            <div className={style.proList}>
              {pro.products.map((product) => {
                return (
                  <div   >
                    <Slider
                      autoplay
                      speed={2000}
                      infinite
                     
                      className={style.slider}
                    
                    >
                      <div className={style.category}>
                      <img
                        className={style.images}
                        src={product.imageName}
                        alt=""
                      />
                      <h3>{product.name}</h3>

                      <span>
                        Rs. <strong> {product.price}</strong>{" "}
                      </span>

                      </div>
                    </Slider>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Crousel;
