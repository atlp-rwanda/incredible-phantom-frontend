import {
  GET_ROUTES_SUCCESS,
  GET_ROUTES_FAILED
} from '../actionTypes/actionTypes';

const initialState = {
  loading: false,
  routes: null,
  error: null
};

export const getRoutesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROUTES_SUCCESS:
      return {
        ...state,
        loading: false,
        routes: action.payload
      };
    case GET_ROUTES_FAILED:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
