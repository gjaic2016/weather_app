import React from 'react'

// https://api.open-meteo.com/v1/forecast?latitude=45.81&longitude=15.98&hourly=temperature_2m

const Main = () => {
  return (
    <main className="main_section">
    <div className="section section_temperature">
      <div className="icon">
        <h3>London, GB</h3>
        <img
          src="http://openweathermap.org/img/wn/02d@2x.png"
          alt="weatherIcon"
        />
        <h3>Few Clouds</h3>
      </div>
      <div className="temperature">
        <h1>33°C</h1>
      </div>
    </div>
  </main>
  )
}

export default Main