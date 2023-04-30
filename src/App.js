import Main from "./Main";
import Header from "./Header";
import SearchCity from "./SearchCity";
import WeekForecast from "./WeekForecast";
import TodayForecast from "./TodayForecast";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { getData } from "./service";

function App() {
  console.log("app rendered");
  const [weather, setWeather] = useState();
  const [city, setCity] = useState("");
  

  useEffect(() => {
    console.log("usefect trigered");
  
    const fetchData = async () => {
      const data = await getData(city);
      setWeather(data);
      console.log("SORTED DATA: " + JSON.stringify(data)); 
    };
    fetchData();
  }, [city]);

  const userEntry = (e) => {
    if (e.keyCode === 13) {
      setCity(e.currentTarget.value);
    }
  };

  return (
    <div className="app">
      <div className="overlay">
        <Header />
        <SearchCity userEntry={userEntry} />
        <Router>
          <Switch>
            <Route path="/weekforecast">
              <WeekForecast weather={weather} />
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
