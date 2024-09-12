const initState = {
    movieDetailData: [],
    movieCasts: [],
    isAlreadyInWatchlist: false
};

export const detailReducer = (state = initState, action) => {
    if (action.type === 'SET_MOVIE_DETAIL') {
        let watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
        let isAlreadyInWatchlist = watchlist.some(movie => {
            return movie.id === action.payload.id
        });
        return {
            ...state,
            movieDetailData: action.payload,
            isAlreadyInWatchlist: isAlreadyInWatchlist
        };
    }
    else if (action.type === 'SET_WATCHLIST') {
        return {
            ...state,
            isAlreadyInWatchlist: action.payload
        };
    }
    else if (action.type === 'SET_MOVIE_CASTS') {
        return {
            ...state,
            movieCasts: action.payload
        };
    }
    return state;
};