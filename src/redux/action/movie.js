import axios from "axios";
import { API_HOST } from "../../config/api";
import { setLoading } from "./global";
import { API_KEY } from "../../config/apiKey";

export const getNowPlayingMovie = (page = 1) => dispatch => {
    const options = {
        method: 'GET',
        url: `${API_HOST.url}/3/movie/now_playing?language=en-US&page=${page}`,
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_KEY.token}`
        }
    };

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