import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row split-weather">
        <div className="today col">
          <h1 className="current-city">{props.weatherData.city}</h1>
          <FormattedDate date={props.weatherData.date} />
        </div>
        <div className="col temp-col">
          <img
            className="todays-icon"
            src={props.weatherData.icon}
            alt="weather-icon"
          />{" "}
          <div className=" temp">
            {Math.round(props.weatherData.temperature)} °C
          </div>
        </div>
        <div className="col weather-data">
          <div className="weather-description text-capitalize">
            {props.weatherData.description}
          </div>
          <div className="humidity">
            Humidity: {props.weatherData.humidity}%
          </div>
          <div className="wind">
            Wind: {Math.round(props.weatherData.wind)} m/sec
          </div>
        </div>
      </div>
    </div>
  );
}
