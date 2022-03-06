import React from "react";
import "./WeekdayForecast.css";
export default function WeekdayForecast() {
  return (
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
  );
}
