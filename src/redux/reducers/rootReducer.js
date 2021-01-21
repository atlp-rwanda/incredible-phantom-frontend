import { combineReducers } from 'redux';
import { forgotReducer, resetReducer } from './resetReducer';
import { langSelectionReducer } from './langSelectionReducer';
import { navReducer } from './navReducer';
import isLoggedReducer from '../reducers/isLogged';
import { logoutReducer } from './logoutReducer';

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
  deleteDriverReducer
});
export default rootReducers;
