import React, { useEffect, useRef, useState } from "react";
import "./carousel.css";
import Card from "../card/card";
import Arrow from "../../Images/right-arrow.svg";
import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const Carousel = () => {
  const cityDetails = (state) => state.weather.cityDetails;
  let topFiveItems = useSelector(
    (state) => state.weather.cityDetails
  );
  let carousel = useRef();
  let [slideNum, setSlideNum] = useState(0);
  let [slide, setSlide] = useState(true);

  const nextSlide = () => {
    setSlideNum((nextSlide) => {
      carousel.current.scrollLeft =
        ((nextSlide + 1) % topFiveItems.length) * carousel.current.offsetWidth;
      return (nextSlide + 1) % topFiveItems.length;
    });
  };

  const prevSlide = () => {
    setSlideNum((prevSlide) => {
      carousel.current.scrollLeft =
        ((prevSlide - 1 + topFiveItems.length) % topFiveItems.length) *
        carousel.current.offsetWidth;
      return (prevSlide - 1 + topFiveItems.length) % topFiveItems.length;
    });
  };

  const movetoNthSlide = (index) => {
    carousel.current.scrollLeft = index * carousel.current.offsetWidth;
    setSlideNum(index);
  };

  useEffect(() => {
    if (carousel.current) {
      // console.log(carousel.current.childrens[0].offsetWidth);
    }
  }, []);

  useEffect(() => {
    let interval;
    if (!slide) {
      interval = setInterval(nextSlide, 5000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [slide]);

  return (
    <React.Fragment>
      <div
        className="carousel"
        onMouseOver={() => setSlide(false)}
        onMouseLeave={() => setSlide(true)}
      >
        <div className="carousel-body scroll" ref={carousel}>
          {topFiveItems.map((item, index) => (
            <Card currentItem={item} alt="Loading..." key={index} />
          ))}
        </div>
        {slideNum !== 0 && (
          <button
            className="carousel-prev-button btn btn-primary"
            onClick={prevSlide}
          >
            <img src={Arrow} alt="" />
          </button>
        )}
        {slideNum !== topFiveItems.length - 1 && (
          <button
            className="carousel-next-button btn btn-primary"
            onClick={nextSlide}
          >
            <img src={Arrow} alt="" />
          </button>
        )}
        <div className="dots">
          {topFiveItems.map((item, index) => (
            <div
              className={`dot btn btn-outline-primary ${
                index === slideNum ? "dot-focused" : ""
              }`}
              key={index}
              onClick={() => movetoNthSlide(index)}
            >
              {index + 1}
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Carousel;
