import { useState } from 'react';
import SearchBar from './SearchBar';
import WeatherInfo from './WeatherInfo';
import ForecastInfo from './ForecastInfo';
import SearchCity from './SearchCity';
import CityNotFound from './CityNotFound';

const MainContainer = () => {
    const [cityName, setCityName] = useState(null);
    const [error, setError] = useState(null)
    
    const handleSearch = (searchTerm) => {
        setCityName(searchTerm); 
        setError(null); // En cada busqueda se resetea el estado del error
    };

    const handleError = (message) => {
        setError(message); 
    };

    const renderContent = () => {
        if (!cityName) return <SearchCity />;
        if (error) return <CityNotFound />;
        return (
            <>
                <WeatherInfo cityName={cityName} onError={handleError} />
                <ForecastInfo cityName={cityName} onError={handleError} />
            </>
        );
    };

    return (
        <div className="main-container">
            <SearchBar onSearch={handleSearch}/>
            {renderContent()}
        </div>
    );
}

export default MainContainer