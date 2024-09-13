import axios from "axios";
import { API_HOST } from "../../config/api";
import { axiosOptions } from "./axiosOption";
import Swal from "sweetalert2";
import { setLoading } from "./global";

export const getMovieReview = (id, page = 1) => dispatch => {
    const url = `${API_HOST.url}/3/movie/${id}/reviews?language=en-US&page=${page}`
    const options = axiosOptions(url)

    axios
        .request(options)
        .then(function (response) {
            dispatch(setLoading(false))
            dispatch({ type: 'SET_REVIEW', payload: response.data });
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