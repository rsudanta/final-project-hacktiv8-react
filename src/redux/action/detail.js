import axios from "axios";
import { API_HOST } from "../../config/api";
import { API_KEY } from "../../config/apiKey";
import { setLoading } from "./global";

const axiosOptions = (url) => ({
    method: 'GET',
    url: url,
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_KEY.token}`
    }
});

export const getMovieDetail = (id) => dispatch => {
    const url = `${API_HOST.url}/3/movie/${id}?language=en-US`
    const options = axiosOptions(url)

    axios.request(options)
        .then(function (response) {
            console.log(response.data)
            dispatch({ type: 'SET_MOVIE_DETAIL', payload: response.data });
            setLoading(false)
        })
        .catch(function (error) {
            setLoading(false)
            console.error(error);
        });
}

export const getMovieCasts = (id) => dispatch => {
    const url = `${API_HOST.url}/3/movie/${id}/credits?language=en-US`
    const options = axiosOptions(url)

    axios.request(options)
        .then(function (response) {
            console.log(response.data)
            dispatch({ type: 'SET_MOVIE_CASTS', payload: response.data.cast.slice(0,9) });
            setLoading(false)
        })
        .catch(function (error) {
            setLoading(false)
            console.error(error);
        });
}