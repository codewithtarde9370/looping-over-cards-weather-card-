import React from "react";
import "./weather-card.css";


function WeatherCard({ imgSrc, city, temp, weather }) {

    
  return (
    <div className="card">
      <img src={imgSrc} alt="Weather" className="img" />
      <h1 className="city">{city}</h1>
      <p className="temp">{temp}</p>
      <p className="weather">{weather}</p>
    </div>
  );
}

export default WeatherCard;
