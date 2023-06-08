import React, { memo, useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';

const SearchBar = ({fetchHotelSearchResults, initMapScript, initAutocomplete}) => {
    const [searchInput, setSearchInput] = useState('');

    const onSearchLocation = ( { target } ) => {
        setSearchInput(target?.value);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            fetchHotelSearchResults(searchInput);
        }, 500)
        
        initMapScript()
        .then(() => initAutocomplete(searchInput));
        return () => {
            clearInterval(timer);
        }
    }, [searchInput, fetchHotelSearchResults, initMapScript, initAutocomplete])

    return(
        <div className='search'>
            <span>
                <SearchIcon />
            </span>
            <input
                value={searchInput}
                onChange={onSearchLocation}
                type='text' placeholder='Seach Place....' />
            <button>
                <GpsFixedIcon />
            </button>
        </div>
    );
};

export default memo(SearchBar);