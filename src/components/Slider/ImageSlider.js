import React, { useEffect, useState } from "react";
import slides from "../../slides";
import Slider from "./Slider";
import style from './ImageSlider.module.css'
const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidePrev = (e) => {
    setCurrentSlide((prev) => {
      return prev === 0 ? slides.length - 1 : currentSlide - 1;
    });
  };
  const slideNext = (e) => {
    setCurrentSlide((prev) => {
      return prev +1  === slides.length ? 0 : currentSlide + 1;
    });
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prev) => {
        return prev + 1 === slides.length ? 0 : prev + 1;
      });
    }, 4000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div className={style.imageSlider}>
      <Slider
        image={slides[currentSlide]}
        slidePrev={slidePrev}
        slideNext={slideNext}
      />
    </div>
  );
};

export default ImageSlider;
