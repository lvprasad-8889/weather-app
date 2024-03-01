import React, { memo } from "react";

import "./card.css";

import Rain from "../../Images/rain.svg";
import Cloud from "../../Images/cloudy.svg";
import Sunny from "../../Images/sunny.svg";

const Card = ({ currentItem }) => {
  let selectImg = {
    Clouds: Cloud,
    Rain: Rain,
    Clear: Sunny,
  };
  return (
    <React.Fragment>
      <div className="card">
        <div className="spacing-header text-uppercase d-flex justify-content-between fw-bold">
          <div>{currentItem.day}</div>
          <div>{currentItem.time}</div>
        </div>
        <hr />
        <div className="row spacing-body">
          <div className="col-sm-4">
            <div className="d-flex justify-content-center align-items-center gap-2">
              <img
                src={selectImg[currentItem.weatherCondtion]}
                alt="Loading..."
                width="60px"
                height="60px"
              />
              <div className="display-temp">
                <div className="temp">{currentItem.temperature}</div>
                <div className="units">
                  <div className="symbol"></div>
                  <span className="sub">C</span>
                </div>
              </div>
            </div>
            <div className="weather-condition fw-bold text-center text-primary m-2">
              {currentItem.weatherCondtion}
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <div className="title">Min</div>
              <div className="value">
                <div className="display-temp">
                  <div className="range">{currentItem.minTemperature}</div>
                  <div className="units gap-0">
                    <div className="symbol adjust"></div>
                    <span className="subAdjust">C</span>
                  </div>
                </div>
              </div>
            </div>
            <hr className="line need-margin" />
            <div className="d-flex justify-content-between align-items-center">
              <div className="title">Max</div>
              <div className="value">
                <div className="display-temp">
                  <div className="range">{currentItem.maxTemperature}</div>
                  <div className="units">
                    <div className="symbol"></div>
                    <span className="subAdjust">C</span>
                  </div>
                </div>
              </div>
            </div>
            <hr className="line display" />
          </div>
          <div className="col-sm-8">
            <div className="d-flex justify-content-between">
              <div className="title">Feels Like</div>
              <div className="value fw-bold">{currentItem.feelsLike}</div>
            </div>
            <hr className="line" />
            <div className="d-flex justify-content-between">
              <div className="title">Humidity</div>
              <div className="value fw-bold">{currentItem.humidity}</div>
            </div>
            <hr className="line" />
            <div className="d-flex justify-content-between">
              <div className="title">Wind Speed</div>
              <div className="value fw-bold">
                {currentItem.windSpeed} {"km/h"}
              </div>
            </div>
            <hr className="line" />
            <div className="d-flex justify-content-between">
              <div className="title">Pressure</div>
              <div className="value fw-bold">{currentItem.pressure} Pascals</div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default memo(Card);
