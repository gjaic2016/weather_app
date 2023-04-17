import React from "react";
import { useHistory } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const WeekForecast = () => {
  let history = useHistory();

  const goBack = () => {
    history.push("/");
  };

  return (
    <>
      <FaArrowLeft className="goBackButton" onClick={goBack}></FaArrowLeft>
      <main className="week_section">
       
        <div className="week_section_size section_week">
          <div className="icon">
            <h3>DAY</h3>
            <h3>London, GB</h3>
            <img
              src="http://openweathermap.org/img/wn/02d@2x.png"
              alt="weatherIcon"
            />
            <h3>Few Clouds</h3>
          </div>
          <div className="temperature">
            <h2>33°C</h2>
          </div>
        </div>
        
        <div className="week_section_size section_week">
          <div className="icon">
            <h3>DAY</h3>
            <h3>London, GB</h3>
            <img
              src="http://openweathermap.org/img/wn/02d@2x.png"
              alt="weatherIcon"
            />
            <h3>Few Clouds</h3>
          </div>
          <div className="temperature">
            <h2>33°C</h2>
          </div>
        </div>
        <div className="week_section_size section_week">
          <div className="icon">
            <h3>DAY</h3>
            <h3>London, GB</h3>
            <img
              src="http://openweathermap.org/img/wn/02d@2x.png"
              alt="weatherIcon"
            />
            <h3>Few Clouds</h3>
          </div>
          <div className="temperature">
            <h2>33°C</h2>
          </div>
        </div>
        <div className="week_section_size section_week">
          <div className="icon">
            <h3>DAY</h3>
            <h3>London, GB</h3>
            <img
              src="http://openweathermap.org/img/wn/02d@2x.png"
              alt="weatherIcon"
            />
            <h3>Few Clouds</h3>
          </div>
          <div className="temperature">
            <h2>33°C</h2>
          </div>
        </div>
        <div className="week_section_size section_week">
          <div className="icon">
            <h3>DAY</h3>
            <h3>London, GB</h3>
            <img
              src="http://openweathermap.org/img/wn/02d@2x.png"
              alt="weatherIcon"
            />
            <h3>Few Clouds</h3>
          </div>
          <div className="temperature">
            <h2>33°C</h2>
          </div>
        </div>
      </main>
    </>
  );
};

export default WeekForecast;
