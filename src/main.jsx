import React from 'react';
import ReactDOM from 'react-dom/client';
import WeatherCard from './components/weather-card';
import "./main.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <h1>Weather Cards</h1>
    <div className='card-container'>
      
    <WeatherCard 
  city="Mumbai" 
  temp="29°C" 
  weather="Sunny" 
/>
<WeatherCard 
  city="Pune" 
  temp="22°C" 
  weather="Rainy" 
/>
<WeatherCard 
  city="Nagpur" 
  temp="25°C" 
  weather="Cloudy" 
/>
<WeatherCard 
  city="Nashik" 
  temp="15°C" 
  weather="Snowy" 
/>


      
    </div>
  </>
);
