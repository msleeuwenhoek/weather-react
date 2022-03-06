import React from "react";
import WeekdayForecast from "./WeekdayForecast";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast ">
      <WeekdayForecast />
      <WeekdayForecast />
      <WeekdayForecast />

      <WeekdayForecast />
      <WeekdayForecast />
      <WeekdayForecast />
    </div>
  );
}
