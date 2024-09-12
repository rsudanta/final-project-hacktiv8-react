const movieInitialState = {
    nowPlayingMovie: [],
    hasMore: true,
    page: 1,
    topMovie: []
};

export const movieReducer = (state = movieInitialState, action) => {
    switch (action.type) {
        case 'SET_NOW_PLAYING_MOVIE':
            return {
                ...state,
                nowPlayingMovie: [...state.nowPlayingMovie, ...action.payload],
                page: state.page + 1,
                hasMore: action.payload.length > 0
            };
        case 'SET_TOP_MOVIE':
            return {
                ...state,
                topMovie: action.payload
            };
        default:
            return state;
    }
};
