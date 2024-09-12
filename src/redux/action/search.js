import axios from "axios";
import { API_HOST } from "../../config/api";

const axiosOptions = (query, page) => ({
    method: 'GET',
    url: `${API_HOST.url}/3/search/multi?query=${query}&include_adult=false&language=en-US&page=${page}`,
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
    }
});

export const getSearchAutoComplete = (query, page = 1) => dispatch => {
    const options = axiosOptions(query, page)

    axios.request(options)
        .then(function (response) {
            dispatch({ type: 'SET_SEARCH_AUTOCOMPLETE', payload: response.data.results.slice(0, 5) });
        })
        .catch(function (error) {
            console.error(error);
        });
};


export const getSearch = (query, page = 1) => dispatch => {
    const options = axiosOptions(query, page)

    axios.request(options)
        .then(function (response) {
            dispatch({ type: 'SET_SEARCH', payload: response.data.results });
        })
        .catch(function (error) {
            console.error(error);
        });
}