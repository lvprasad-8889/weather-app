import "./search.css";

import React, { memo, useEffect, useState } from "react";

import Result from "../results/results";
import { fetchCityStatus } from "../../store/actions";
import { useDispatch } from "react-redux";

const Search = () => {
  const dispatch = useDispatch();
  let [cityName, setCityName] = useState("london");
  let [error, setError] = useState({
    msg: "Please enter city name",
    submitted: false,
    validName: false,
  });

  const changeCityName = (event) => {
    setCityName(event.target.value);
  };

  const searchCity = (event) => {
    event.preventDefault();
    if (cityName) {
      dispatch(fetchCityStatus(cityName.toLowerCase()));
      setError({
        ...error,
        submitted: false,
        validName: true,
      });
    } else {
      setError({
        ...error,
        submitted: true,
      });
    }
  };

  useEffect(() => {
    if (cityName) {
      dispatch(fetchCityStatus(cityName));
      setError({
        ...error,
        submitted: false,
        validName: true,
      });
    }
  }, [dispatch]);

  return (
    <React.Fragment>
      <div className="container">
        <div className="row mt-2 d-flex">
          <form className="search col-9 mx-auto" onSubmit={searchCity}>
            <input
              type="search"
              name="search-city"
              id="search-city"
              className="form-control"
              placeholder="Enter city name..."
              value={cityName}
              onChange={changeCityName}
            />
          </form>
          <input
            type="submit"
            className="col-3 btn btn-dark"
            onClick={searchCity}
            value="Search"
          />
        </div>
          {error.submitted && (
            <small className="text-danger mb-4">{error.msg}</small>
          )}
        {error.validName && <Result />}
      </div>
    </React.Fragment>
  );
};

export default memo(Search);
