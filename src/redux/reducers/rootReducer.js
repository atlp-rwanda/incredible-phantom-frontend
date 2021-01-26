import { combineReducers } from 'redux';
import { langSelectionReducer } from './langSelectionReducer';
import { navReducer } from './navReducer';

const rootReducers = combineReducers({
  navReducer,
  langSelectionReducer,
});
export default rootReducers;
