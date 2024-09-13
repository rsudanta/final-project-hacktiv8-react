const movieInitialState = {
    nowPlayingMovie: [],
    hasMore: true,
    page: 1,
    topMovie: []
};

export const movieReducer = (state = movieInitialState, action) => {
    switch (action.type) {
        case 'SET_NOW_PLAYING_MOVIE':
            const existingMovieIds = new Set(state.nowPlayingMovie.map(movie => movie.id));
            const newMovies = action.payload.filter(movie => !existingMovieIds.has(movie.id));

            return {
                ...state,
                nowPlayingMovie: [...state.nowPlayingMovie, ...newMovies],
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
