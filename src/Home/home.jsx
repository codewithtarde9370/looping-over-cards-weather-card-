
import React from "react"
import "./home.css"
import WeatherCard from "../components/weather-card";


const weatherData = [
    {
      city: "Mumbai",
      temp: "29°C",
      weather: "Sunny"
    },
    {
      city: "Pune",
      temp: "22°C",
      weather: "Rainy"
    },
    {
      city: "Nagpur",
      temp: "25°C",
      weather: "Cloudy"
    },
    {
      city: "Nashik",
      temp: "15°C",
      weather: "Snowy"
    }
  ];
  


function Home(){
    return(
        <>
  <h1>Weather Cards</h1>
    <div className='card-container'>
       { 
        weatherData.map((weatherObj)=>{

            return<WeatherCard 
                city={weatherObj.city}
                temp={weatherObj.temp}
                weather={weatherObj.weather} />
        

        })
}
    </div>
  </>
    )
}
export default Home