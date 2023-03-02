import Main from "./Main";
import Header from "./Header";
import WeekForecast from "./WeekForecast";
import TodayForecast from "./TodayForecast";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const bckgrndImage = "https://wallpaperaccess.com/full/1540016.jpg";

  const getData = async () => {
    const URL = `https://api.open-meteo.com/v1/forecast?latitude=45.81&longitude=15.98&hourly=temperature_2m&current_weather=true`;

    const data = await fetch(URL)
    .then((res) => res.json())
    .then((data) => data);
    
    
  }

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getDatagit();
      // setWeather(data);
      console.log(data);
     
    };

    fetchWeatherData();
  }, []);

  return (
    <div className="app" style={{ backgroundImage: `url(${bckgrndImage})` }}>
      <div className="overlay">
        <Header />
        <Router>
          <Switch>
            <Route path="/weekforecast">
              <WeekForecast />
            </Route>
            <Route path="/todayforecast">
              <TodayForecast />
            </Route>
            <Route>
              <Main exact path="/" />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
