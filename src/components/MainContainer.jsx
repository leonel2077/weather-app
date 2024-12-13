import { useState, useEffect } from 'react'
import axios from 'axios';

const MainContainer = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);

    const fetchWeatherData = async () => {
        try {
            setError(null);
            const apiKey = import.meta.env.VITE_API_KEY;
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${apiKey}`
            );
            setWeatherData(response.data);
        } catch (err) {
            console.error(err);
            setError('Failed to fetch weather data');
        }
    };
    
    useEffect(() => {
        fetchWeatherData(); 
    }, []);
    
    if (error) {
        return <div>{error}</div>;
    }

    if (!weatherData) {
        return <p>Loading...</p>;
    }

    return (
        <div className="main-container">       
            <p>City: {weatherData.name}</p>
            <p>Temperature: {(weatherData.main.temp - 273.15).toFixed(2)} °C</p>
            <p>Humidity: {weatherData.main.humidity} %</p>
            <p>Weather: {weatherData.weather[0].description}</p>
        </div>
    );
}

export default MainContainer