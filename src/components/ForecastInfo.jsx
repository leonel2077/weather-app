import { useState, useEffect } from 'react'
import axios from 'axios';

// eslint-disable-next-line react/prop-types
const ForecastInfo = ({ cityName, onError }) => {
    const [forecastData, setForecastData] = useState(null);

    const fetchForecastData = async () => {
        try {
            const apiKey = import.meta.env.VITE_API_KEY;
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&APPID=${apiKey}`
            );
            setForecastData(response.data);
        } catch (err) {
            console.error(err);
            onError('Failed to fetch forecast data');
        }
    };
    
    useEffect(() => {
        fetchForecastData(); 
    }, [cityName]);
    

    if (!forecastData) {
        return <p>Loading...</p>;
    }

    return (
        <div className="forecast-items-container">
            <div className="forecast-item">
                <h5 className="forecast-item-date regular-txt">10 Aug</h5>
                <img src="assets/weather/thunderstorm.svg" className="forecast-item-img" />
                <h5 className="forecast-item-temp">{(forecastData.list[1].main.temp- 273.15).toFixed(2)} °C</h5>
            </div>

            <div className="forecast-item">
                <h5 className="forecast-item-date regular-txt">10 Aug</h5>
                <img src="assets/weather/thunderstorm.svg" className="forecast-item-img" />
                <h5 className="forecast-item-temp">{(forecastData.list[2].main.temp- 273.15).toFixed(2)} °C</h5>
            </div>

            <div className="forecast-item">
                <h5 className="forecast-item-date regular-txt">10 Aug</h5>
                <img src="assets/weather/thunderstorm.svg" className="forecast-item-img" />
                <h5 className="forecasst-item-temp">{(forecastData.list[3].main.temp- 273.15).toFixed(2)} °C</h5>
            </div>

            <div className="forecast-item">
                <h5 className="forecast-item-date regular-txt">10 Aug</h5>
                <img src="assets/weather/thunderstorm.svg" className="forecast-item-img" />
                <h5 className="forecast-item-temp">{(forecastData.list[4].main.temp- 273.15).toFixed(2)} °C</h5>
            </div>

            <div className="forecast-item">
                <h5 className="forecast-item-date regular-txt">10 Aug</h5>
                <img src="assets/weather/thunderstorm.svg" className="forecast-item-img" />
                <h5 className="forecast-item-temp">{(forecastData.list[5].main.temp- 273.15).toFixed(2)} °C</h5>
            </div>
        </div>
    )
}

export default ForecastInfo;