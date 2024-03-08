
import React, { useState, useEffect } from 'react'
import './../styles/App.css';
import WeatherDisplay from './WeatherDisplay';

function App() {
  const [weatherData, setWeatherData] = useState({ temperature: 0, conditions: '' });

  useEffect(() => {
    const fetchedWeatherData = { temperature: 25, conditions: "Sunny" };
    setWeatherData(fetchedWeatherData);
  }, []);

  return (
    <div className="App">
      <WeatherDisplay weatherData={weatherData} />
    </div>
  );
}

export default App;