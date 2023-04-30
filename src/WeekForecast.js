import React from "react";
import { useHistory } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { iconURLBuilder } from "./service2";

const WeekForecast = ({ weather }) => {
  
  const { lat, lon } = weather || {};
  const mapUrl = `http://maps.google.com/maps?q=${lat}, ${lon}&z=15&output=embed`;

  let history = useHistory();

  const goBack = () => {
    history.push("/");
  };

  var getDayName = (dateStr, locale) => {
    let date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: "long" });
  };

  var formatToLocalDate = (dateStr, locale) => {
    let date = new Date(dateStr);
    return date.toLocaleDateString(locale, {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    });
  };

  let filteredlist = weather.list.filter(item => item.dt_txt.includes("12:00:00"));

  return (
    <>
      <FaArrowLeft className="goBackButton" onClick={goBack}></FaArrowLeft>
      <main>
        <div className="week_section">
          {filteredlist.map((item,index) => {
            return (
              <div key={index} className="week_section_size section_week">
                <div className="icon">
                  {/* <h4>{formatToLocalTime(item.dt_txt, "hr-HR")}</h4> */}
                  <h4>{formatToLocalDate(item.dt_txt)}</h4>
                  <h3>{getDayName(item.dt_txt, "hr-HR")}</h3>
                  <img
                    src={iconURLBuilder(item.weather[0].icon)}
                    alt="weatherIcon"
                  />
                  <h3>{item.weather[0].main}</h3>
                </div>
                <div className="temperature">
                  <h2>{item.main.temp.toFixed()}°C</h2>
                </div>
              </div>
            );
          })}
        </div>
        <div className="section_week">
          <iframe
            className="map"
            src={mapUrl}
            title="Map"
          ></iframe>
        </div>
      </main>
    </>
  );
};

export default WeekForecast;