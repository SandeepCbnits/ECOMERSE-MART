import React from "react";
import style from "./Slider.module.css";
const Slider = ({ image, slidePrev, slideNext }) => {
  return (
    <div>
      <img className={style.image} src={image.image} alt="image-Slider" />
      <div className={style.imageSlider}>
        <div className={style.actions}>
          <button title="Previs Slides" className={style.actions1} onClick={slidePrev}>
            <h1>&lt;</h1>
          </button>
          <button title="Forword Slides" className={style.actions2} onClick={slideNext}>
            <h1>&gt;</h1>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
