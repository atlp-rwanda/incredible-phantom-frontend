import { combineReducers } from 'redux';
import { forgotReducer, resetReducer } from './resetReducer';
import { langSelectionReducer } from './langSelectionReducer';
import { navReducer } from './navReducer';
import isLoggedReducer from '../reducers/isLogged';
import { logoutReducer } from './logoutReducer';
import {
  getBusesReducer,
  editBusReducer,
  deleteBusReducer,
  createBusReducer
} from './busesReducer';

const rootReducers = combineReducers({
  navReducer,
  langSelectionReducer,
  logoutReducer,
  forgotReducer,
  resetReducer,
  auth: isLoggedReducer,
  logoutReducer,
  getBusesReducer,
  editBusReducer,
  deleteBusReducer,
  createBusReducer
});
export default rootReducers;
