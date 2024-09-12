const initState = {
    isLoading: false,
    isError: false
};

export const globalReducer = (state = initState, action) => {
    if (action.type === 'SET_LOADING') {
        return {
            ...state,
            isLoading: action.payload,
        };
    }
    else if (action.type === 'SET_ERROR') {
        return {
            ...state,
            isError: action.payload,
        };
    }
    return state;
};