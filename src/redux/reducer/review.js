const initialState = {
    review: [],
    hasMore: true,
    page: 1,
};

export const reviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_REVIEW':
            return {
                ...state,
                review: action.payload.results,
                page: state.page + 1,
                totalResult: action.payload.total_results,
                hasMore: action.payload.results.length < action.payload.total_results && action.payload.results.length > 0,
            };

        default:
            return state;
    }
};
