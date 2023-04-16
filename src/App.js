import Main from "./Main";
import Header from "./Header";
// import SearchCity from "./SearchCity";
import WeekForecast from "./WeekForecast";
import TodayForecast from "./TodayForecast";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { getData } from "./service";

function App() {

  const bckgrndImage = "https://wallpaperaccess.com/full/1540016.jpg";
  const [weather, setWeather] = useState();
  const [city, setCity] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData(city);
      setWeather(data);
      console.log(data);
    }
    fetchData();
  }, [city]);

  const userEntry = (e) => {
    console.log("inside userEntry")
    if(e.keyCode === 13) {
      setCity(e.currentTarget.value)
    }
  }

  const userSearch = (e) => {
    e.preventDefault();
    console.log("inside userSearch")
    console.log(e.currentTarget.value)

    setCity(e.currentTarget.value)
  }

  return (
    <div className="app" style={{ backgroundImage: `url(${bckgrndImage})` }}>
      <div className="overlay">
        <Header />
        {/* <SearchCity /> */}
        <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
          <input
            id="search"
            type="text"
            role="searchbox"
            name="city"
            placeholder="Search city..."
            onKeyDown={userEntry}
            // value={city}
            // onChange={(e) => setCity(e.target.value)}
          />
          <button type="submit" onClick={userSearch}>Search</button>
        </form>
        {weather ? 
        <Router>
          <Switch>
            <Route path="/weekforecast">
              <WeekForecast />
            </Route>
            <Route path="/todayforecast">
              <TodayForecast />
            </Route>
            <Route>
              <Main 
              exact path="/" 
              weather={weather}
              />
            </Route>
          </Switch>
        </Router>
        : "Enter city in search field."}
      </div>
    </div>
  );
}

export default App;
