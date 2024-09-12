import axios from "axios";
import { API_HOST } from "../../config/api";
import { axiosOptions } from "./axiosOption";
import Swal from "sweetalert2";

export const getMovieDetail = (id) => dispatch => {
    const url = `${API_HOST.url}/3/movie/${id}?language=en-US`
    const options = axiosOptions(url)

    axios.request(options)
        .then(function (response) {
            dispatch({ type: 'SET_MOVIE_DETAIL', payload: response.data });
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

export const getMovieCasts = (id) => dispatch => {
    const url = `${API_HOST.url}/3/movie/${id}/credits?language=en-US`
    const options = axiosOptions(url)

    axios.request(options)
        .then(function (response) {
            dispatch({ type: 'SET_MOVIE_CASTS', payload: response.data.cast.slice(0, 9) });
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