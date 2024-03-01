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
          <div className="col-sm-4 weather-info">
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
            <div className="weather-condition fw-bold">
              {currentItem.weatherCondtion}
            </div>
          </div>
          <div className="col-sm-8 d-flex justify-content-center">
            {currentItem.time}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default memo(Card);
