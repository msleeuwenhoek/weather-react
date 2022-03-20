import React from "react";
import FormattedDate from "./FormattedDate";
import TemperatureUnit from "./TemperatureUnit";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="today">
        <h1 className="current-city">{props.weatherData.city}</h1>
        <FormattedDate date={props.weatherData.date} />
      </div>
      <div className="row split-weather">
        <div className="col">
          <img
            className="todays-icon"
            src={props.weatherData.icon}
            alt="weather-icon"
          />
          <span className="temp">
            <TemperatureUnit
              celsius={Math.round(props.weatherData.temperature)}
            />
          </span>
        </div>
        <div className="col split-weather">
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
