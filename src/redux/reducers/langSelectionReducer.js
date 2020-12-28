import { DROP } from '../actionTypes/actionTypes';
const initialState = false;
export const langSelectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case DROP:
      return !state;
    default:
      return state;
  }
};
