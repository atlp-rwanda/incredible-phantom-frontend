import {
    VIEW_PROFILE,
    VIEW_SUCCESS,
    VIEW_FAIL
  } from '../actionTypes/profileType';
  const initialState = {
    loading: false,
    data: null,
    error: null
  };
  export const viewProfileReducer = (state = initialState, action) => {
    switch (action.type) {
      case VIEW_PROFILE:
        return { ...state, loading: true };
      case VIEW_SUCCESS:
        return { ...state, data: action.payload };
      case VIEW_FAIL:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };