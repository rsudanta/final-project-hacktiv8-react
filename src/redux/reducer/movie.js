const initState = {
    nowPlaying: [],
};

export const movieReducer = (state = initState, action) => {
    if (action.type === 'SET_NOW_PLAYING_MOVIE') {
        return {
            ...state,
            nowPlaying: action.payload
        };
    }
    return state;
};