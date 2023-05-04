import Main from "./Main";
import Header from "./Header";
import SearchCity from "./SearchCity";
import WeekForecast from "./WeekForecast";
import TodayForecast from "./TodayForecast";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { getData } from "./service";
import { formatToLocalDate } from "./helper";

function App() {
  const [weather, setWeather] = useState();
  const [city, setCity] = useState("");
  const [hourForecast, setHourForecast] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData(city);
      setWeather(data);
      
    };
    fetchData();
  }, [city, hourForecast]);

  const userEntry = (e) => {
    if (e.keyCode === 13) {
      setCity(e.currentTarget.value);
    }
  };

  const searchOnClick = (e) => {
    setCity(e);
  }

  const filterOutSelectedForecast = (selectedDate) => {
    let filteredDateHours = weather.list.filter((item) =>
      formatToLocalDate(item.dt_txt).includes(selectedDate)
    );
    setHourForecast(filteredDateHours);
  };

  return (
    <div className="app">
      <div className="overlay">
        <Header />
        <SearchCity userEntry={userEntry} searchOnClick={searchOnClick} />
        <Router>
          <Switch>
            <Route path="/weekforecast">
              <WeekForecast
                weather={weather}
                filterOutSelectedForecast={filterOutSelectedForecast}
                city={city}
              />
            </Route>
            <Route path="/todayforecast">
              <TodayForecast hourForecast={hourForecast} />
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
