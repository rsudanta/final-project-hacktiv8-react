
import { combineReducers } from 'redux';
import { detailReducer } from './detail';
import { globalReducer } from './global';
import { movieReducer } from './movie';
import { searchReducer } from './search';

const reducer = combineReducers({
    globalReducer,
    movieReducer,
    searchReducer,
    detailReducer,
});

export default reducer;