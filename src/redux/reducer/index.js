
import { combineReducers } from 'redux';
import { globalReducer } from './global';
import { movieReducer } from './movie';

const reducer = combineReducers({
    globalReducer,
    movieReducer
});

export default reducer;