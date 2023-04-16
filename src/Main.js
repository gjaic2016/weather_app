import React from "react";

// https://api.open-meteo.com/v1/forecast?latitude=45.81&longitude=15.98&hourly=temperature_2m

const Main = ({weather}) => {
  return (
    <main className="main_section">
      <div className="section section_temperature">
        <div className="icon">
          <h3>{weather.name}, {weather.country}</h3>
          <img
            className="iconWeather"
            src={weather.iconURL}
            alt="weatherIcon"
          />
          <h3>{weather.description}</h3>
        </div>
        <div className="temperature">
          <h1>{weather.temp.toFixed()}°C</h1>
        </div>
      </div>
    </main>
  );
};

export default Main;
