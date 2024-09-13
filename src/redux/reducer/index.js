
import { combineReducers } from 'redux';
import { detailReducer } from './detail';
import { globalReducer } from './global';
import { movieReducer } from './movie';
import { searchReducer } from './search';
import { reviewReducer } from './review';

const reducer = combineReducers({
    globalReducer,
    movieReducer,
    searchReducer,
    detailReducer,
    reviewReducer
});

export default reducer;