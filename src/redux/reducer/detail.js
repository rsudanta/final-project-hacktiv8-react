const initState = {
    movieDetailData: [],
    movieCasts: []
};

export const detailReducer = (state = initState, action) => {
    if (action.type === 'SET_MOVIE_DETAIL') {
        return {
            ...state,
            movieDetailData: action.payload
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