import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const WeekForecast = ({ daily }) => {
  const { temperature_2m_max, time } = daily || {};
  const [transformedData, setTransformedData] = useState();
  const mapUrl = `http://maps.google.com/maps?q=${daily.lat}, ${daily.lon}&z=15&output=embed`

  let history = useHistory();

  const goBack = () => {
    history.push("/");
  };

  useEffect(() => {
    const transformedArray = buildarrayOfObjects(time, temperature_2m_max);
    console.log("--------------" + JSON.stringify(transformedArray));
    setTransformedData(transformedArray);
  }, []);

  var buildarrayOfObjects = (timeDate, temp) => {
    const array = [];
    for (let i = 0; i < time.length; i++) {
      array.push({ time: timeDate[i], temp: temp[i].toFixed() });
    }
    return array;
  };

  var getDayName = (dateStr, locale) => {
    var date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: "long" });
  };

  return (
    <>
      <FaArrowLeft className="goBackButton" onClick={goBack}></FaArrowLeft>
      <main>
        <div className="week_section">
          {transformedData &&
            transformedData.map((item, index) => {
              return (
                <div key={index} className="week_section_size section_week">
                  <div className="icon">
                    <h3>{getDayName(item.time, "hr-HR")}</h3>
                    <img
                      src="http://openweathermap.org/img/wn/02d@2x.png"
                      alt="weatherIcon"
                    />
                    <h3>Few Clouds</h3>
                  </div>
                  <div className="temperature">
                    <h2>{item.temp}°C</h2>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="section_week">
          <iframe className="map"
            // src="http://maps.google.com/maps?q=45.814277, 15.977370&z=15&output=embed"
            src={mapUrl}
            title="Map"
          ></iframe>
        </div>
      </main>
    </>
  );
};

export default WeekForecast;
