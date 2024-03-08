// WeatherDisplay.js
import React from 'react';

function WeatherDisplay({ weatherData }) {
    const temperatureStyle = {
        color: weatherData.temperature > 20 ? 'red' : 'blue'
    };

    return (
        <div>
            <p style={temperatureStyle}>Temperature: {weatherData.temperature}</p>
            <p>Conditions: {weatherData.conditions}</p>
        </div>
    );
}

export default WeatherDisplay;
