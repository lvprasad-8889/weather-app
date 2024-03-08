import { useSelector } from "react-redux";
import React, { memo } from "react";
import "./results.css";

import Card from "../card/card";

import CityNotFound from "../../Images/404.png";

const Result = () => {
  let isLoading = useSelector((state) => state.weather.isLoading);
  let currentItem = useSelector((state) => state.weather.currentItem);

  return (
    <React.Fragment>
      {isLoading && (
        <div className="result mt-5 d-flex justify-content-center align-items-center">
          <div className="spinner-border text-dark" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      {!isLoading && !currentItem && (
        <div className="location-not-found">
          <h1 className="text-dark">Sorry, Location not found!!!</h1>
        </div>
      )}
      {!isLoading && currentItem && <Card currentItem={currentItem} />}
    </React.Fragment>
  );
};

export default memo(Result);
