import { combineReducers } from 'redux';
import { counterReducer } from './counterReducer';

const rootReducers = combineReducers({ counterReducer });
export default rootReducers;
