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
  // const [dailytemp, setDailyTemp] = useState();

  useEffect(() => {
    let didCancel = false;
    if (!didCancel) {
      const fetchData = async () => {
        const data = await getData(city);
        setWeather(data);
        console.log("SORTED DATA" + JSON.stringify(data)); //clean data
      };
      fetchData().catch(console.error);
    }
    return () => {
      didCancel = true;
    };
  }, [city]);

  const userEntry = (e) => {
    // console.log("inside userEntry");
    if (e.keyCode === 13) {
      setCity(e.currentTarget.value);
    }
  };

  return (
    <div className="app" 
    // style={{ backgroundImage: `url(${bckgrndImage})` }}
    >
      <div className="overlay">
        <Header />
        <SearchCity userEntry={userEntry} />
        <Router>
          <Switch>
            <Route path="/weekforecast">
              <WeekForecast daily={weather} />
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
