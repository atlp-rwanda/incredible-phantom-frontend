import { combineReducers } from 'redux';
import { counterReducer } from './counterReducer';
import { langSelectionReducer } from './langSelectionReducer';
import { navReducer } from './navReducer';

const rootReducers = combineReducers({
  counterReducer,
  navReducer,
  langSelectionReducer,
});
export default rootReducers;
