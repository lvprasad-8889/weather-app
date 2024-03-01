import { useSelector } from "react-redux";
import React, { memo } from "react";
import "./results.css";

import Card from "../card/card";
import Buttons from "../buttons/button";
import Carousel from "../carousel/carousel";

const Result = () => {
  let isLoading = useSelector((state) => state.weather.isLoading);
  let cityDetails = useSelector((state) => state.weather.cityDetails);
  let currentCity = useSelector((state) => state.weather.cityName);
  let showTopFive = useSelector((state) => state.weather.showTopFive);
  let currentItem = useSelector((state) => state.weather.currentItem);

  return (
    <React.Fragment>
      {isLoading && (
        <div className="result mt-5 d-flex justify-content-center align-items-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      {!isLoading && !cityDetails.length && (
        <div className="text-danger text-center">
          City with name {currentCity} does not exist 😔
        </div>
      )}
      {!isLoading && cityDetails && (
        <div>
          <Buttons
            showTopFive={showTopFive}
            cityDetails={cityDetails}
            currentItem={currentItem}
          />
          {showTopFive ? <Carousel /> : <Card currentItem={currentItem} />}
        </div>
      )}
    </React.Fragment>
  );
};

export default memo(Result);
