import React, { useState } from "react";

export default function TemperatureUnit(props) {
  const [celsius, setCelsius] = useState(true);

  function showFahrenheit(event) {
    event.preventDefault();
    setCelsius(false);
  }

  function showCelsius(event) {
    event.preventDefault();
    setCelsius(true);
  }

  if (celsius) {
    return (
      <span>
        <span className="temperature">{props.celsius}</span>
        <span className="units">
          °C |{" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span>
        <span className="temperature">
          {Math.round(props.celsius * 1.8 + 32)}
        </span>
        <span className="units">
          <a href="/" onClick={showCelsius}>
            °C{" "}
          </a>
          | °F
        </span>
      </span>
    );
  }
}
