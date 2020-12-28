import { ON } from '../actionTypes/actionTypes';
const initialState = false;
export const navReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON:
      return !state;
    default:
      return state;
  }
};
