import Main from "./Main";
import Header from "./Header";
import SearchCity from "./SearchCity";
import WeekForecast from "./WeekForecast";
import TodayForecast from "./TodayForecast";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { getData, getForecastData } from "./service";

function App() {
  const bckgrndImage = "https://wallpaperaccess.com/full/1540016.jpg";
  const [weather, setWeather] = useState();
  const [city, setCity] = useState("");
  const [forecast, setForecast] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData(city);
      setWeather(data);
      console.log(data);
    };
    fetchData().catch(console.error);

    const fetchForecastData = async () => {
      const forecastData = await getForecastData(city);
      // setForecast(forecastData);
      console.log(forecastData);
    };
    fetchForecastData();
  }, [city]);

  const userEntry = (e) => {
    console.log("inside userEntry");
    if (e.keyCode === 13) {
      setCity(e.currentTarget.value);
    }
  };

  const userSearch = (e) => {
    e.preventDefault();
    console.log("inside userSearch");
    console.log(e.currentTarget.value);

    setCity(e.currentTarget.value);
  };

  return (
    <div className="app" style={{ backgroundImage: `url(${bckgrndImage})` }}>
      <div className="overlay">
        <Header />
        <SearchCity userEntry={userEntry} userSearch={userSearch} />
        <Router>
          <Switch>
            <Route path="/weekforecast">
              <WeekForecast />
            </Route>
            <Route path="/todayforecast">
              <TodayForecast />
            </Route>
            <Route>
              <Main exact path="/" weather={weather} />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
