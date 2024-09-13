import axios from "axios";
import { API_HOST } from "../../config/api";
import { axiosOptions } from "./axiosOption";
import Swal from "sweetalert2";

export const getSearchAutoComplete = (query, page = 1) => dispatch => {
    const url = `${API_HOST.url}/3/search/multi?query=${query}&include_adult=false&language=en-US&page=${page}`
    const options = axiosOptions(url)

    axios.request(options)
        .then(function (response) {
            dispatch({ type: 'SET_SEARCH_AUTOCOMPLETE', payload: response.data.results });
        })
        .catch(function (error) {
            console.error(error);
        });
};


export const getSearchMovie = (query, page = 1) => dispatch => {
    const url = `${API_HOST.url}/3/search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`
    const options = axiosOptions(url)

    axios.request(options)
        .then(function (response) {
            dispatch({ type: 'SET_SEARCH_MOVIE', payload: response.data });
        })
        .catch(function (error) {
            Swal.fire({
                title: 'Error!',
                text: error.message,
                icon: 'error',
                confirmButtonText: 'OK'
            });
            console.error(error);
        });
}

export const loadMoreMovie = (query, page = 1) => dispatch => {
    const url = `${API_HOST.url}/3/search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`
    const options = axiosOptions(url)

    axios.request(options)
        .then(function (response) {
            dispatch({ type: 'LOAD_MORE_SEARCH_MOVIE', payload: response.data });
        })
        .catch(function (error) {
            Swal.fire({
                title: 'Error!',
                text: error.message,
                icon: 'error',
                confirmButtonText: 'OK'
            });
            console.error(error);
        });
}