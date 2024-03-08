import { useSelector } from "react-redux";

import "./navbar.css";
import Logo from "../../Images/weather-logo.jpg";
import { memo } from "react";

const Navbar = () => {
  let currentCity = useSelector((state) => state.weather.cityName);
  return (
    <nav className="navbar bg-white navbar-expand mb-3">
      <div className="container d-flex justify-content-around">
        <div className="navbar-brand fw-bold d-flex justify-content-between align-items-center gap-sm-2">
          <img src={Logo} alt="" width="50px" height="40px" />
          WeatherApp
        </div>
        <div className="current-city fw-bold navbar-brand text-truncate text-capitalize">
          {currentCity}
        </div>
      </div>
    </nav>
  );
};

export default memo(Navbar);
