import "./App.css";

import Forecast from "./Forecast";
import Weather from "./Weather";
import Credits from "./Credits";

export default function App() {
  return (
    <div className="App">
      <div className="weather-app">
        <Weather city="rotterdam" />

        <Forecast />
        <Credits />
      </div>
    </div>
  );
}
