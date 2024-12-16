import ForecastInfo from './ForecastInfo';
import SearchBar from './SearchBar';
import WeatherInfo from './WeatherInfo';

const MainContainer = () => {

    return (
        <div className="main-container">
            <SearchBar />
            <WeatherInfo />
            <ForecastInfo />
        </div>
    );
}

export default MainContainer