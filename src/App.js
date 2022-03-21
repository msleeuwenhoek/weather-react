import "./App.css";

import Weather from "./Weather";
import Credits from "./Credits";

export default function App() {
  return (
    <div className="App">
      <div className="weather-app">
        <Weather city="rotterdam" />

        <Credits />
      </div>
    </div>
  );
}
