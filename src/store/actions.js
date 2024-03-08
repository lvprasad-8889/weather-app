import axios from "axios";
import { weatherActions } from "./reducer";

const appid = "95f0471168a0178722e26465e8523354";

const formatAMPM = (date) => {
  var hours = date.split(" ")[1].split(":")[0];
  var minutes = date.split(" ")[1].split(":")[1];
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  minutes = minutes === "000" ? "00" : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
};

const cityFetched = (cityName) => {
  let prevCityDetails = JSON.parse(localStorage.getItem("city-details"));
  return prevCityDetails
    ? prevCityDetails.findIndex((item) => item.cityName === cityName) !== -1
    : false;
};

const setCity = (cityDetails) => {
  let prevCityDetails = JSON.parse(localStorage.getItem("city-details"));
  if (!prevCityDetails) {
    localStorage.setItem("city-details", JSON.stringify([cityDetails]));
  } else {
    localStorage.setItem(
      "city-details",
      JSON.stringify([...prevCityDetails, cityDetails])
    );
  }
};

const getCityDetails = (cityName) => {
  let prevCityDetails = JSON.parse(localStorage.getItem("city-details"));
  return prevCityDetails.find(
    (item) => item.cityName.toLowerCase() === cityName.toLowerCase()
  );
};

export const fetchCityStatus = (cityName) => {
  return async (dispatch) => {
    dispatch(weatherActions.setCityName({ data: cityName }));
    if (cityFetched(cityName)) {
      let res = getCityDetails(cityName);
      dispatch(weatherActions.setCityDetails({ data: res }));
      return;
    }
    dispatch(weatherActions.setIsLoading({ data: true }));
    try {
      // get latitude and longitude
      let latLong = await axios.get(
        `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=95f0471168a0178722e26465e8523354`
      );

      // get city details
      let res = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${latLong.data[0].lat}&lon=${latLong.data[0].lon}&appid=${appid}`
      );

      // filter data
      let unProccessedCityDetails = res.data.list[0];
      let cityDetails = {
        day: new Date(unProccessedCityDetails.dt_txt).toLocaleDateString(
          "en-US",
          {
            weekday: "long",
          }
        ),
        time: formatAMPM(unProccessedCityDetails.dt_txt),
        weatherCondtion: unProccessedCityDetails.weather[0].main,
        windSpeed: unProccessedCityDetails.wind.speed,
        temperature: parseInt(unProccessedCityDetails.main.temp - 273.15),
        humidity: unProccessedCityDetails.main.humidity,
        visibility: (unProccessedCityDetails.visibility) /1000
      };
      setCity({ ...cityDetails, cityName });
      // set data in redux
      dispatch(weatherActions.setCityDetails({ data: cityDetails }));
    } catch (e) {
      console.log("error in fetching weather info..", e);
      dispatch(weatherActions.setCityDetails({ data: null }));
    } finally {
      dispatch(weatherActions.setIsLoading({ data: false }));
    }
  };
};
