import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { Chart } from "react-google-charts";
import { formatToLocalTime, formatToLocalDate, getDayName } from "./helper";

const TodayForecast = ({ hourForecast }) => {
  let history = useHistory();

  const goBack = () => {
    history.push("/weekforecast");
  };

  var buildGraphDataArray = (hourForecast) => {
    const graphDataArray = [["Hour", "Temp"]];

    for (let i = 0; i < hourForecast.length; i++) {
      graphDataArray.push([
        formatToLocalTime(hourForecast[i].dt_txt) + "h",
        hourForecast[i].main.temp,
      ]);
    }

    return graphDataArray;
  };

  const options = {
    hAxis: { title: "Hour(h)" },
    vAxis: { title: "Temperature(°C)" },
    chart: {
      title: "Hourly forecast",
      subtitle: "in Celsius",
    },
    pointSize: 6,
    backgroundColor: "white",
  };

  return (
    <div>
      <FaArrowLeft className="goBackButton" onClick={goBack}></FaArrowLeft>
      <main>
        <div className="icon">
          <h4>{formatToLocalDate(hourForecast[0].dt_txt)}</h4>
          {getDayName(hourForecast[0].dt_txt, "hr-HR")}
        </div>
        <div className="week_section">
          <Chart
            className="reactgoogleChart"
            chartType="LineChart"
            width="100%"
            height="500px"
            data={buildGraphDataArray(hourForecast)}
            options={options}
          />
        </div>
      </main>
    </div>
  );
};

export default TodayForecast;
