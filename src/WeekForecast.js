import React from "react";
import { useHistory } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { iconURLBuilder } from "./service";
import { formatToLocalDate, getDayName } from "./helper";
import {GoogleMap, useLoadScript, Marker} from "@react-google-maps/api";

const WeekForecast = ({ weather, filterOutSelectedForecast, city }) => {
  
  // const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&q=${city}&zoom=12`;

  const {lat,lon} = weather;

  let history = useHistory();

  const goBack = () => {
    history.push("/");
  };

  let filteredlist = weather.list?.filter((item) =>
    item.dt_txt?.includes("12:00:00")
  );

  const {isLoaded} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  });

  if(!isLoaded) return <div>Loading...</div>;

  const Map = () => {
    return <GoogleMap zoom={12} center={{lat: lat, lng: lon}} mapContainerClassName="map">
      <Marker position={{lat: lat, lng: lon}}/>
    </GoogleMap>
  };
  

  return (
    <>
      <FaArrowLeft className="goBackButton" onClick={goBack}></FaArrowLeft>
      <main>
        <div className="week_section">
          {filteredlist && filteredlist.map((item, index) => {
            return (
              <div key={index} className="week_section_size section_week">
                <button onClick={(e) => {
                  
                  // console.log("selected day/date" + formatToLocalDate(item.dt_txt));
                  filterOutSelectedForecast(formatToLocalDate(item.dt_txt));
                  history.push("/todayforecast");
                  }}>
                  <div className="icon">
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
                </button>
              </div>
            );
          })}
        </div>
        <div className="section_week">
          <Map />;
          {/* <iframe className="map" src={mapUrl} title="Map"></iframe> */}
        </div>
      </main>
    </>
  );
};

export default WeekForecast;