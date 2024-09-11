const initState = {
    isLoading: false,
};

export const globalReducer = (state = initState, action) => {
    if (action.type === 'SET_LOADING') {
        return {
            ...state,
            isLoading: action.payload,
        };
    }
    return state;
};