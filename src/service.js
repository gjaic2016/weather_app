const API_KEY = "d1739a6b892148c0bfec5c19a8245d1a";

const iconURLBuilder = (iconId) =>
  `http://openweathermap.org/img/w/${iconId}.png`;

const getData = async (city, units = "metric") => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;

  const data = await fetch(URL)
    .then((res) => res.json())
    .then((data) => data);

  const {
    weather,
    main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
    wind: { speed },
    sys: { country },
    name,
    coord,
  } = data;

  const { description, icon } = weather[0];
  const { lat, lon } = coord;

  console.log(data);

  const forecastURL = `https://api.open-meteo.com/v1/dwd-icon?latitude=${lat}&longitude=${lon}&hourly=temperature_2m&daily=temperature_2m_max&timezone=auto`;

  const forecastData = await fetch(forecastURL)
    .then((res) => res.json())
    .then((forecastData) => forecastData);

  // console.log("returned uncleaned forecast data" + JSON.stringify(forecastData));

  const {
    daily: { temperature_2m_max, time },
  } = forecastData;

  // all data

  return {
    lat,
    lon,
    temp,
    description,
    iconURL: iconURLBuilder(icon),
    country,
    name,
    temperature_2m_max,
    time,
  };
};

export { getData };

// const getForecastData = async (lat,lon) => {

//   const forecastURL = `https://api.open-meteo.com/v1/dwd-icon?latitude=${lat}&longitude=${lon}&hourly=temperature_2m&daily=temperature_2m_max&timezone=auto`;
//   // const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`;
//   // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

//   // console.log(forecastURL);

//    const forecastData = await fetch(forecastURL)
//   .then((res) => res.json())
//   .then((forecastData) => forecastData);

//   // console.log("FORECAST DATA" + JSON.stringify(forecastData));

//   const {daily: {time, temperature_2m_max} } = forecastData;

//   return {time, temperature_2m_max}

// };

// export { getForecastData };
