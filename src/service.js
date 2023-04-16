const API_KEY = "d1739a6b892148c0bfec5c19a8245d1a";

const iconURLBuilder = (iconId) => `http://openweathermap.org/img/w/${iconId}.png`;

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
  } = data;

  const { description, icon } = weather[0];
  
//   console.log(data);
  return {
    temp, 
    description, 
    iconURL: iconURLBuilder(icon), 
    country, 
    name
  }

};

export { getData };
