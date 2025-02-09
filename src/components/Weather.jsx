import React from 'react';
import './Weather.css';
import snow from "../assets/snow.png";

const Weather = () => {
  return (
    <div className='weather'>
        <div className='search-bar'>
            <input type='text' placeholder='Enter City Name' />
            <button className='submit-button'>Search</button>
        </div>
        <img src={snow} alt='snow' width="70px" height="70px" />
        <p>20°C</p>
        <p>Toronto</p>
    </div>
  )
}

export default Weather