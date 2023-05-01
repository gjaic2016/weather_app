import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useHistory } from "react-router-dom";

const TodayForecast = ({ hourForecast }) => {
  let history = useHistory();

  const goBack = () => {
    history.push("/weekforecast");
  };

  return (
    <div>
      <FaArrowLeft className="goBackButton" onClick={goBack}></FaArrowLeft>
      <main>
        <div className="week_section">
          {hourForecast.map((item, index) => {
            return (
              <div key={index} className="week_section_size section_week">
                <div className="icon">
                  <h4>{item.dt_txt}</h4>
                  <h4>{item.main.temp}°C</h4>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default TodayForecast;
