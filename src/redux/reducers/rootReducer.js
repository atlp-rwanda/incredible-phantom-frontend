import { combineReducers } from 'redux';
import { forgotReducer, resetReducer } from './resetReducer';
import { langSelectionReducer } from './langSelectionReducer';
import { navReducer } from './navReducer';
import isLoggedReducer from '../reducers/isLogged';
import { logoutReducer } from './logoutReducer';
import {
  getRoutesReducer,
  editRouteReducer,
  deleteRouteReducer,
  createRouteReducer
} from './routesReducer';

const rootReducers = combineReducers({
  navReducer,
  langSelectionReducer,
  logoutReducer,
  forgotReducer,
  resetReducer,
  auth: isLoggedReducer,
  logoutReducer,
  getRoutesReducer,
  editRouteReducer,
  deleteRouteReducer,
  createRouteReducer
});
export default rootReducers;
