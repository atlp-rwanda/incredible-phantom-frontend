import { combineReducers } from 'redux';
import { forgotReducer, resetReducer } from './resetReducer';
import { langSelectionReducer } from './langSelectionReducer';
import { navReducer } from './navReducer';
import isLoggedReducer from '../reducers/isLogged';

const rootReducers = combineReducers({
  navReducer,
  langSelectionReducer,
  forgotReducer,
  resetReducer,
  auth: isLoggedReducer
});
export default rootReducers;
