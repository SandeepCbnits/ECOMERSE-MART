import React from "react";
import Kitchendata from "../../../KitchenData";
import style from "./HomeAndKitchen.module.css";
const HomeAndKitchen = () => {
  return (
    <div className={style.container}>
      {Kitchendata.kitchen.map((data) => {
        return (
          <div key={data.id} className={style.items}>
            <div className={style.imageContainer}>
              <img src={data.image} alt={data.title} />
             <div>

              <p>{data.description}</p>
              <p className={style.price}>{data.price}</p>
             </div>
            </div>
                     
           
          </div>
        );
      })}
    </div>
  );
};

export default HomeAndKitchen;
