import React from "react";
import style from "./DetailPage.module.css";
const DetailPage = () => {
  
  return (
    <div className={style.container}>
      <div className={style.sidebar}>assidbar</div>
      <div className={style.detail_fan}>
        <img src="https://media.istockphoto.com/photos/turquoise-arm-chair-isolated-on-white-background-front-view-of-picture-id1199428736?k=20&m=1199428736&s=612x612&w=0&h=vRS-zg2d6tF7jqQ8lI3oYFs_JC3fXdPCZhkvlEhHJkc=" alt="Detail_Pages" />
        <div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
             </p>
          <h3>In Stock</h3>
          <p>Rating</p>
          <span>Price</span>
          <div>
            <button>Buy Now</button>
            <button>Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
