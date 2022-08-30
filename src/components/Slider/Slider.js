import React from "react";
import style from "./Slider.module.css";
const Slider = ({ image, slidePrev, slideNext }) => {
  return (
    <div>
       <img className={style.image} src={image.image} alt="image-Slider" />
      <div className={style.imageSlider}>
        <div className={style.actions}>
          <button className={style.actions1} onClick={slidePrev}>
            Prevs Image
          </button>
          <button className={style.actions2} onClick={slideNext}>
            Forword Image
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
