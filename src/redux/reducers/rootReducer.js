import { combineReducers } from 'redux';
import { forgotReducer, resetReducer } from './resetReducer';
import { langSelectionReducer } from './langSelectionReducer';
import { navReducer } from './navReducer';
import isLoggedReducer from '../reducers/isLogged';
import { logoutReducer } from './logoutReducer';
import {
  fetchDriverReducer,
  assignDriveReducer,
  UnassignDriverReducer,
  getBusReducer
} from './assignDriverReducer';
import {
  getRolesReducer,
  editRoleReducer,
  deleteRoleReducer,
  createRoleReducer
} from './rolesReducer';

import {
  registerReducer,
  getOperatorReducer,
  deleteOperatorReducer,
  editOperatorReducer
} from './registerOperatorReducer.js';
import {
  registerDriverReducer,
  getDriverReducer,
  editDriverReducer,
  deleteDriverReducer
} from './registerDriverReducer';
import { updateProfileReducer } from './updateProfileReducer';
import { viewProfileReducer } from './viewProfileReducer';
import { getRoutesReducer } from './routesReducer';
const rootReducers = combineReducers({
  navReducer,
  langSelectionReducer,
  logoutReducer,
  forgotReducer,
  resetReducer,
  auth: isLoggedReducer,
  logoutReducer,
  getRolesReducer,
  editRoleReducer,
  deleteRoleReducer,
  createRoleReducer,
  registerReducer,
  getOperatorReducer,
  deleteOperatorReducer,
  editOperatorReducer,
  registerDriverReducer,
  getDriverReducer,
  editDriverReducer,
  deleteDriverReducer,
  updateProfileReducer,
  viewProfileReducer,
  fetchDriverReducer,
  assignDriveReducer,
  UnassignDriverReducer,
  getBusReducer,
  getRoutesReducer
});
export default rootReducers;
