import axios from "axios";
import { API_HOST } from "../../config/api";
import { axiosOptions } from "./axiosOption";
import Swal from "sweetalert2";
import { setLoading } from "./global";

export const getNowPlayingMovie = (page = 1) => dispatch => {
    const url = `${API_HOST.url}/3/movie/now_playing?language=en-US&page=${page}`
    const options = axiosOptions(url)

    axios
        .request(options)
        .then(function (response) {
            dispatch(setLoading(false))
            dispatch({ type: 'SET_NOW_PLAYING_MOVIE', payload: response.data.results });
        })
        .catch(function (error) {
            dispatch(setLoading(false))
            Swal.fire({
                title: 'Error!',
                text: error.message,
                icon: 'error',
                confirmButtonText: 'OK'
            });
            console.error(error);
        });
};

export const getTopMovie = () => dispatch => {
    const url = `${API_HOST.url}/3/movie/top_rated?language=en-US&page=1`
    const options = axiosOptions(url)

    axios
        .request(options)
        .then(function (response) {
            dispatch(setLoading(false))
            dispatch({ type: 'SET_TOP_MOVIE', payload: response.data.results.slice(0, 5) });
        })
        .catch(function (error) {
            dispatch(setLoading(false))
            Swal.fire({
                title: 'Error!',
                text: error.message,
                icon: 'error',
                confirmButtonText: 'OK'
            });
            console.error(error);
        });
};