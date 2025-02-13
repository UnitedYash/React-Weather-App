import React from 'react';
import './Weather.css';
import snow from "../assets/snow.png";
import windyImage from "../assets/windy.png";
import humidityImage from "../assets/humidity.png";
const Weather = () => {
  return (
    <div className='weather'>
        <div className='search-bar'>
            <input type='text' placeholder='Enter City Name' />
            <button className='submit-button'>Search</button>
        </div>
        <img src={snow} alt='snow' width="100px" height="100px" />
        <p>1°C</p>
        <p>Toronto</p>
        <div className='other-info'>
          <div className="wind-speeds">
            <img src={windyImage} width="50px" height="50px"></img>
            <p>19km/h Wind Speed</p>
          </div>
          <div className="humidity">
            <img src={humidityImage} width="50px" height="50px"></img>
            <p>81% Humidity</p>
          </div>
        </div>
    </div>
  )
}

export default Weather