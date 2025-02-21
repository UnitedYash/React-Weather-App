import React, {useEffect, useState} from 'react';
import axios from "axios";
import './Weather.css';
import snow from "../assets/snow.png";
import windyImage from "../assets/windy.png";
import humidityImage from "../assets/humidity.png";


const Weather = () => {

  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const apiKey = import.meta.env.VITE_WEATHER_API;

  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;
  const searchLocation = (event) => {
    axios.get(URL).then((response) => {
      setData(response.data);
      setLocation("");
    })
  }
  //Start of new branch


  return (
    <div className='weather'>
        <div className='search-bar'>
        <input 
            type="text" 
            placeholder="Enter City Name" 
            value={location} 
            onChange={(e) => setLocation(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && searchLocation()}
        />
            <button className='submit-button' onClick={searchLocation}>Search</button>
        </div>
        <img src={snow} alt='snow' width="100px" height="100px" />
        <p>{Math.round(data?.main?.temp)} °C</p>
        <p>{data.name}</p>
        <div className='other-info'>
          <div className="wind-speeds">
            <img src={windyImage} width="50px" height="50px"></img>
            <p>{Math.round(data?.wind?.speed * 3.6)} km/h Wind Speed</p>
          </div>
          <div className="humidity">
            <img src={humidityImage} width="50px" height="50px"></img>
            <p>{data?.main?.humidity}% Humidity</p>
          </div>
        </div>
    </div>
  )
}

export default Weather