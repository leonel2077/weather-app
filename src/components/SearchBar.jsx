import { useState} from 'react';
import search_icon from '/assets/icons/search.svg';

// eslint-disable-next-line react/prop-types
const SearchBar = ({onSearch}) => {
    const [searchTerm, setSearchTerm] = useState(null)

    const handleInput =  (e) => {
        setSearchTerm(e.target.value)
    }

    const handleSearch = () => {
        onSearch(searchTerm);
    }

    return (
        <div className="input-container">
            <input className="city-input" placeholder="Search City" type="text" value={searchTerm} onChange={handleInput}/>
            <button className="search-btn" onClick={handleSearch}>
                <img src={search_icon} alt="Search"/>
            </button>
        </div>
    )
}

export default SearchBar