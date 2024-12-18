import { useState, useEffect } from 'react'
import axios from 'axios';

import location_icon from '/assets/icons/location.svg';
import water_drop from '/assets/icons/water_drop.svg';
import air_icon from '/assets/icons/air_icon.svg';

// eslint-disable-next-line react/prop-types
const WeatherInfo = ({ cityName, onError }) => {
    const [weatherData, setWeatherData] = useState(null);

    const fetchWeatherData = async () => {
        try {
            const apiKey = import.meta.env.VITE_API_KEY;
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${apiKey}`
            );
            setWeatherData(response.data);
        } catch (err) {
            console.error(err);
            onError('Failed to fetch weather data');
        }
    };
    
    useEffect(() => {
        fetchWeatherData(); 
    }, [cityName]);

    if (!weatherData) {
        return <p>Loading...</p>;
    }
    
    return (
        <div className='weather-info'>
            <div className='location-date-container'>
                <div className="location">
                    <img src={location_icon} alt="Location Icon "/>
                    <h4 className='city-txt'>{weatherData.name}</h4>
                </div>
                <h5 className='current-date-txt regular-txt'>Wed, 09 Aug</h5>        
            </div>
            
            <div className="weather-summary-container">
                <img src="assets/weather/clouds.svg" alt="Current weather" className="weather-summary-img" />
                <div className="weather-summary-info">
                    <h1 className="temp-txt">{(weatherData.main.temp - 273.15).toFixed(2)} °C</h1>
                    <h3 className="condition-txt regular-txt">{weatherData.weather[0].description}</h3>
                </div>
            </div>

            <div className="weather-conditions-container">
                <div className="condition-item">
                    <img src={water_drop} alt="Humidity Icon"/>
                    <div className="condition-info">
                        <h5 className="regular-txt">Humidity</h5>
                        <h5 className="humidity-value-txt">{weatherData.main.humidity}%</h5>
                    </div>
                </div>

                <div className="condition-item">
                    <img src={air_icon} alt="Wind Icon"/>
                    <div className="condition-info">
                        <h5 className="regular-txt">Wind Speed</h5>
                        <h5 className="humidity-value-txt">{weatherData.wind.speed} M/s</h5>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default WeatherInfo
