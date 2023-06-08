import * as APIS from '../../constants/api';

export const getSearchResults = () => (dispatch, getState, { api }) => 
    api
    .get(APIS.HOTELS)
    .then((result) => {
        return result;
    })
    .catch((error) => {
        throw error;
    })