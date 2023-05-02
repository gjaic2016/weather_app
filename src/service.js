const API_KEY = "d1739a6b892148c0bfec5c19a8245d1a";

export const iconURLBuilder = (iconId) =>
  `http://openweathermap.org/img/w/${iconId}.png`;

const getData = async (city, units = "metric") => {
  
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;
  
  const data = await fetch(URL)
  .then((res) => res.json())
  .then((resdata) => resdata);

  const {
    weather,
    main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
    wind: { speed },
    sys: { country },
    name,
    coord,
  } = data || {};

  const { description, icon } = weather[0];
  const { lat, lon } = coord;

  const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
 
  const forecastData = await fetch(forecastURL)
  .then((res) => res.json())
  .then((forecastDataRes) => forecastDataRes);

  const {list} = forecastData;

  return {
    lat,
    lon,
    temp,
    temp_min,
    temp_max,
    pressure,
    humidity,
    feels_like,
    speed,
    description,
    iconURL: iconURLBuilder(icon),
    country,
    name,
    list
  };
};

export { getData };