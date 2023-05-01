import React from "react";
import { Link } from "react-router-dom";

const Main = ({ weather }) => {
  return weather ? (
    <main className="main_section">
      <Link className="section" to="/weekforecast">
        <div className="section section_temperature">
          <div className="icon">
            <h3>
              {weather.name}, {weather.country}
            </h3>
            <h3>{weather.description}</h3>
          </div>
          <img
            className="iconWeather"
            src={weather.iconURL}
            alt="weatherIcon"
          />
          <div className="temperature">
            <h1>{weather.temp?.toFixed()}°C</h1>
          </div>
        </div>
      </Link>
    </main>
  ) : (
    <main className="main_section">
      <div className="section">
        <div className="icon">
          <h3>Enter city in search field.</h3>
        </div>
      </div>
    </main>
  );
};

export default Main;
