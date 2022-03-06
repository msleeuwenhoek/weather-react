import "./App.css";
import Search from "./Search";
import Forecast from "./Forecast";
import Weather from "./Weather";
import Credits from "./Credits";

export default function App() {
  return (
    <div className="App">
      <div className="weather-app">
        <Search />
        <Weather />

        <Forecast />
        <Credits />
      </div>
    </div>
  );
}
