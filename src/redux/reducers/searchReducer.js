import * as TYPES from '../../constants/actionTypes';

const initialState = {
    hotelSuggestions: null,
    placeSuggestions: null,
};

const SearchReducer = (state = initialState, action = {}) => {
    switch(action.type){
        case TYPES.HOTELS_DATA:
            return {
                ...state,
                hotelSuggestions: action?.payload,
            }
        
        case TYPES.PLACES_DATA:
            return {
                ...state,
                placeSuggestions: action?.payload
            }
        default:
            return state;
    }
};

export default SearchReducer;