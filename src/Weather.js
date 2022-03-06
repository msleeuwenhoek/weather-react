import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="today">
        <h1 className="current-city">Rotterdam</h1>
        <div className="date">Wednesday, February 9th 2022</div>
        <div className="last-updated">Last updated - 13:46</div>
      </div>
      <div className="row split-weather">
        <div className="col">
          <img
            className="todays-icon"
            src="https://openweathermap.org/img/wn/01d@2x.png"
            alt="weather-icon"
          />
          <span className="temp">
            <bold>10</bold> °C
          </span>
        </div>
        <div className="col split-weather">
          <div className="weather-description">Cloudy</div>
          <div className="humidity">Humidity: 80%</div>
          <div className="wind">Wind: 8 m/sec</div>
        </div>
      </div>
    </div>
  );
}
