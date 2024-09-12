const initState = {
    autocomplete: [],
    searchData: []
};

export const searchReducer = (state = initState, action) => {
    if (action.type === 'SET_SEARCH_AUTOCOMPLETE') {
        return {
            ...state,
            autocomplete: action.payload
        };
    } else if (action.type === 'SET_SEARCH') {
        return {
            ...state,
            searchData: action.payload
        };
    }
    return state;
};