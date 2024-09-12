const searchMovie = {
    items: [],
    loading: false,
    hasMore: true,
    page: 1,
    totalResult: 0
};

const initState = {
    autocomplete: [],
    searchMovie: searchMovie
};

export const searchReducer = (state = initState, action) => {
    if (action.type === 'SET_SEARCH_AUTOCOMPLETE') {
        return {
            ...state,
            autocomplete: action.payload
        };
    } else if (action.type === 'SET_SEARCH_MOVIE') {
        return {
            ...state,
            searchMovie: {
                ...state.searchMovie,
                items: action.payload.results,
                totalResult: action.payload.total_results,
                hasMore: action.payload.results.length < action.payload.total_results && action.payload.results.length > 0,
            },
        };
    } else if (action.type === 'LOAD_MORE_SEARCH_MOVIE') {
        let items = [...state.searchMovie.items, ...action.payload.results]
        return {
            ...state,
            searchMovie: {
                ...state.searchMovie,
                items: items,
                totalResult: action.payload.total_results,
                hasMore: items.length < action.payload.total_results && action.payload.results.length > 0,
            },
        };
    } else if (action.type === 'SET_SEARCH_MOVIE_PAGE') {
        return {
            ...state,
            searchMovie: {
                ...state.searchMovie,
                page: action.payload,
            },
        };
    }
    return state;
};