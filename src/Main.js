import React from "react";
import { Link } from "react-router-dom";
import {
  FaTemperatureHigh,
  FaTemperatureLow,
  FaWind,
  FaTint,
  FaTachometerAlt,
  FaWaveSquare,
} from "react-icons/fa";

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
      <div className="section_additionaldata">
        <div className="section_additionaldata_col">
          <div className="section_additionaldata_icon">
            <FaTemperatureLow className="faicons"></FaTemperatureLow>
            <h4>Min. temp: {weather.temp_min.toFixed()}°C</h4>
          </div>
          <div className="section_additionaldata_icon">
            <FaTemperatureHigh className="faicons"></FaTemperatureHigh>
            <h4>Max. temp: {weather.temp_max.toFixed()}°C</h4>
          </div>
        </div>
        <div className="section_additionaldata_col">
          <div className="section_additionaldata_icon">
            <FaWind className="faicons"></FaWind>
            <h4>Wind speed: {weather.speed} km/h</h4>
          </div>
          <div className="section_additionaldata_icon">
            <FaWaveSquare className="faicons"></FaWaveSquare>
            <h4>Feels like: {weather.feels_like}°C</h4>
          </div>
        </div>
        <div className="section_additionaldata_col">
          <div className="section_additionaldata_icon">
            <FaTachometerAlt className="faicons"></FaTachometerAlt>
            <h4>Pressure: {weather.pressure} Pa</h4>
          </div>
          <div className="section_additionaldata_icon">
            <FaTint className="faicons"></FaTint>
            <h4>Humidity: {weather.humidity}%</h4>
          </div>
        </div>
      </div>
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
