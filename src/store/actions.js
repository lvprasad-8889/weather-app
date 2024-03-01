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

export const fetchCityStatus = (cityName) => {
  return async (dispatch) => {
    dispatch(weatherActions.setIsLoading({ data: true }));
    dispatch(weatherActions.setCityName({ data: cityName }));
    try {
      // get latitude and longitude
      let latLong = await axios.get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=95f0471168a0178722e26465e8523354`
      );

      // get city details
      let res = await axios.get(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${latLong.data[0].lat}&lon=${latLong.data[0].lon}&appid=${appid}`
      );

      // filter data
      let cityDetails = res.data.list.map((item) => {
        return {
          day: new Date(item.dt_txt).toLocaleDateString("en-US", {
            weekday: "long",
          }),
          time: formatAMPM(item.dt_txt),
          weatherCondtion: item.weather[0].main,
          windSpeed: item.wind.speed,
          temperature: parseInt(item.main.temp - 273.15),
          feelsLikr: item.main.feels_like,
          humidity: item.main.humidity,
          pressure: item.main.pressure,
          minTemperature: item.main.temp_min,
          maxTemperature: item.main.temp_max,
        };
      });

      console.log(cityDetails)

      dispatch(weatherActions.setCityDetails({ data: cityDetails}));
    } catch {
      console.log("error in fetching weather info..");
      dispatch(weatherActions.setCityDetails({ data: []}));
      dispatch(weatherActions.setShowTopFive({ data: false}));
    } finally {
      dispatch(weatherActions.setIsLoading({ data: false }));
    }
  };
};
