import React from "react";
import "./ForecastDay.css";

export default function ForecastDay(props) {
  function formatDate() {
    let date = new Date(props.forecast.dt * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[date.getDay()];

    return day;
  }

  let icon = `https://openweathermap.org/img/wn/${props.forecast.weather[0].icon}@2x.png`;

  return (
    <div className="WeekdayForecast">
      <div className="col weekDay">{formatDate()} </div>
      <div className="col">
        <img className="weather-icon" src={icon} alt="weather-icon" />
      </div>
      <div className="col">
        <span className="min-temp">{Math.round(props.forecast.temp.min)} </span>
        <span className="max-temp">
          {Math.round(props.forecast.temp.max)} °C
        </span>{" "}
        <div className="col humidity">{props.forecast.humidity}%</div>
      </div>
    </div>
  );
}
