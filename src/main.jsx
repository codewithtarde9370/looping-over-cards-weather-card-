import React from 'react';
import ReactDOM from 'react-dom/client';
import WeatherCard from './components/weather-card';
import Sunny from './components/sunny.png';
import "./main.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <h1>Weather Cards</h1>
    <div className='card-container'>
      
      <WeatherCard 
        imgSrc={Sunny} 
        city="New York" 
        temp="75°F" 
        weather="Sunny" 
      />
      <WeatherCard 
        imgSrc={Sunny} 
        city="New York" 
        temp="75°F" 
        weather="Sunny" 
      />
      <WeatherCard 
        imgSrc={Sunny} 
        city="New York" 
        temp="75°F" 
        weather="Sunny" 
      />
      <WeatherCard 
        imgSrc={Sunny} 
        city="New York" 
        temp="75°F" 
        weather="Sunny" 
      />
      
    </div>
  </>
);
