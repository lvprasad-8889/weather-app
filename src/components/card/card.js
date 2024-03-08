import React, { memo } from "react";

import "./card.css";

import Rain from "../../Images/rain.png";
import Cloud from "../../Images/cloud.png";
import Sunny from "../../Images/clear.png";
import Snow from "../../Images/snow.png";

const Card = ({ currentItem }) => {
  let selectImg = {
    Clouds: Cloud,
    Rain: Rain,
    Clear: Sunny,
    Snow: Snow,
  };
  return (
    <React.Fragment>
      {currentItem && (
        <div className="">
          <div className="weather-condition-image d-flex justify-content-center">
            <img
              src={selectImg[currentItem.weatherCondtion]}
              alt="Loading.."
              width="100px"
              height="100px"
            />
          </div>
          <div className="weather-box m-2">
            <div className="temperature">
              {currentItem.temperature} <sup>°C</sup>
            </div>
            <p className="description">{currentItem.weatherCondtion}</p>
          </div>
          <div className="weather-details d-flex justify-content-sm-around justify-content-center gap-3 flex-wrap">
            <div className="humidity box-shadow box">
              <i className="fa-sharp fa-solid fa-droplet"></i>
              <div className="text">
                <span id="humidity">{currentItem.humidity}%</span>
                <div>Humidity</div>
              </div>
            </div>

            <div className="wind box-shadow box">
              <i className="fa-solid fa-wind"></i>
              <div className="text">
                <span id="wind-speed">{currentItem.windSpeed} Km/H</span>
                <div>Wind Speed</div>
              </div>
            </div>

            <div className="visibility box-shadow box">
              <i className="fa-solid fa-eye"></i>
              <div className="text">
                <span id="wind-speed">{currentItem.visibility} Km</span>
                <div>Visibility</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default memo(Card);
