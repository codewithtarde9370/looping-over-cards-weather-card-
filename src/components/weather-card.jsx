import React from "react";
import "./weather-card.css";
import Cloudy from './cloudy.png'
import Sunny from './sunny.png'

import Rainy from './rainy-day.png'

import Snowy from './snowy.png'



function WeatherCard({city, temp, weather }) {
    const WEATHERICONS=
    {
        "Sunny":Sunny,
        "Cloudy":Cloudy,
        "Rainy":Rainy,
        "Snowy":Snowy
    }
    


    
  return (
    <div className="card">
      <img src={WEATHERICONS[weather]} alt="Weather" className="img" />
      <h1 className="city">{city}</h1>
      <p className="temp">{temp}</p>
      <p className="weather">{weather}</p>
    </div>
  );

}
export default WeatherCard;
