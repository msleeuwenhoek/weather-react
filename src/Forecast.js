import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Forecast.css";
import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.weatherData]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function Search() {
    let apiKey = "3a3fb11a6316d75f69f5016b49163029";
    let lon = props.weatherData.longitude;
    let lat = props.weatherData.latitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="Forecast">
        {forecast.map(function (dailyforecast, index) {
          if (index < 5) {
            return (
              <div className="" key={index}>
                <ForecastDay forecast={dailyforecast} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    Search();
    return "Loading...";
  }
}
