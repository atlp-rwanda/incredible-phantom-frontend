import { combineReducers } from 'redux';
import { forgotReducer, resetReducer } from './resetReducer';
import { langSelectionReducer } from './langSelectionReducer';
import { navReducer } from './navReducer';

const rootReducers = combineReducers({
  navReducer,
  langSelectionReducer,
  forgotReducer,
  resetReducer,
});
export default rootReducers;
