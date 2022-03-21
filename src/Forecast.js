import React, { useState } from "react";
import axios from "axios";
import "./Forecast.css";

export default function Forecast(props) {
  const [forecastData, setForecastData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setForecastData({ ready: true });
  }

  function Search() {
    let apiKey = "3a3fb11a6316d75f69f5016b49163029";
    let lon = props.weatherData.longitude;
    let lat = props.weatherData.latitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (forecastData.ready) {
    return (
      <div className="Forecast">
        <div className="WeekdayForecast row">
          <div className="col weekDay">Monday </div>
          <div className="col">
            <img
              className="weather-icon"
              src="https://openweathermap.org/img/wn/01d@2x.png"
              alt="weather-icon"
            />
          </div>
          <div className="col">
            <span className="min-temp">5 </span>
            <span className="max-temp">| 10 °C</span>{" "}
            <div className="col humidity">80%</div>
          </div>
        </div>
      </div>
    );
  } else {
    Search();
    return "Loading...";
  }
}
