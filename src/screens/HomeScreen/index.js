import React from 'react';
import { useDispatch } from 'react-redux';
import SearchBar from '../../components/searchBar';
import AutoSuggestSearch from '../../components/autoSuggestSearch';
import { getSearchResults } from '../../redux/actions/searchAction';
import * as TYPES from '../../constants/actionTypes';
import { initMapScript } from '../../utilities/helper';

const HomeScreen = () => {
    const dispatch = useDispatch();

    const fetchHotelSearchResults = (value) => {
        dispatch(getSearchResults())
        .then((result) => {
            const data = value
                ? result?.filter((hotel) => {
                    return (
                        hotel &&
                        hotel?.title &&
                        hotel.title.toLowerCase().includes(value.toLowerCase())
                    )
                })
                : null;
            
            dispatch({
                type: TYPES.HOTELS_DATA,
                payload: data,
            });
        })
        .catch((error) => {
            console.log(error);
        })
    }
    
    const displaySuggestions = (predictions, status, anoop) => {
        if(status === window?.google?.maps?.places?.PlacesServiceStatus?.OK){
            const suggestedPlaces = predictions?.map((prediction) => {
                
                return {
                    description: prediction?.description,
                    place_id: prediction?.place_id,
                    format: prediction?.structured_formatting,
                };
            });

            dispatch({
                type: TYPES.PLACES_DATA,
                payload: suggestedPlaces,
            });
        }
    };

    const initAutocomplete = (searchValue) => {
        if(!searchValue){
            dispatch({
                type: TYPES.PLACES_DATA,
                payload: null,
            });
            return
        }

        const service = new window.google.maps.places.AutocompleteService();
        service.getPlacePredictions(
            { input: searchValue },
            displaySuggestions,
        );
        // used getPlacePredictions instead of getQueryPredictions
        // as it gives results specifically for places.
        // while the later also gives places in result
        // but can also be used to search places if given some query
    };

    return (
        <main className='pt-10'>
            <SearchBar
                fetchHotelSearchResults={fetchHotelSearchResults}
                initMapScript={initMapScript}
                initAutocomplete={initAutocomplete}
            />

            <AutoSuggestSearch />
        </main>
    );
};

export default HomeScreen;