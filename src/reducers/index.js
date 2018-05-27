import {combineReducers} from 'redux';
import words from './words';
const rootReducer = combineReducers ({
  words: words
});

export default rootReducer;
