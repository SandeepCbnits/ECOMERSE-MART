import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import style from "./Category.module.css";

const Category = () => {
  const [categorys, setCategorys] = useState([]);
  const navigation = useNavigate();

  let categoryHandler = async () => {
    let category = await fetch(
      "http://localhost:9092/categories/getAllCategories"
    );
    const response = await category.json();
    if (response?.length) {
      setCategorys(response);
    }
  };

  useEffect(() => {
    categoryHandler();
  }, []);

  const onClickHandler = (cid) => {
    navigation(`/category-lists?cid=${cid}`, { replace: "true" });
  };

  return (
    <div>
      <h1>Shop By Category</h1>
      <div>
        {categorys?.map((category) => {
          return (
            <div>
              <h2>{category.categoryName}</h2>
              <div className={style.container}>
                {category.products.map((product) => {
                  return (
                      <Slider autoplay autoplaySpeed={2000} infinite>
                    <div className={style.category}>
                        <img
                          className={style.Images}
                          src={product.imageName}
                          alt={product.name}
                        />
                        <h3 className={style.title}>{product.name}</h3>
                        <span>
                          Rs.{" "}
                          <strong className={style.price}>
                            {" "}
                            {product.price}
                          </strong>{" "}
                        </span>{" "}
                        <br />
                        <div className={style.ShopButton}>
                          <button onClick={() => onClickHandler(category.cid)}>
                            Shop By Category
                          </button>
                        </div>
                    </div>
                      </Slider>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
