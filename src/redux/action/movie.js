import axios from "axios";
import { API_HOST } from "../../config/api";
import { setLoading } from "./global";

const axiosOptions = (url) => ({
    method: 'GET',
    url: url,
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
    }
});

export const getNowPlayingMovie = (page = 1) => dispatch => {
    const url = `${API_HOST.url}/3/movie/now_playing?language=en-US&page=${page}`
    const options = axiosOptions(url)

    axios
        .request(options)
        .then(function (response) {
            dispatch({ type: 'SET_NOW_PLAYING_MOVIE', payload: response.data.results });
            dispatch(setLoading(false))
        })
        .catch(function (error) {
            console.error(error);
            dispatch(setLoading(false))
        });
};

export const getTopMovie = () => dispatch => {
    const url = `${API_HOST.url}/3/movie/top_rated?language=en-US&page=1`
    const options = axiosOptions(url)

    axios
        .request(options)
        .then(function (response) {
            dispatch({ type: 'SET_TOP_MOVIE', payload: response.data.results.slice(0, 5) });
            dispatch(setLoading(false))
        })
        .catch(function (error) {
            console.error(error);
            dispatch(setLoading(false))
        });
};