import SearchBar from './SearchBar';
import WeatherInfo from './WeatherInfo';
import ForecastInfo from './ForecastInfo';
// import SearchCity from './SearchCity';
// import CityNotFound from './CityNotFound';

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