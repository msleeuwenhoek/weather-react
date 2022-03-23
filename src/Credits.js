import React from "react";
import "./Credits.css";

export default function Credits() {
  return (
    <div className="Credits">
      <a
        href="https://github.com/msleeuwenhoek/weather-react"
        rel="noreferrer"
        target="_blank"
      >
        Open-source code
      </a>
      <span className="credits-name"> by Merel Sleeuwenhoek</span>
    </div>
  );
}
