import {
    UPDATE_PROFILE,
    UPDATE_SUCCESS,
    UPDATE_FAILED
  } from '../actionTypes/profileType';
  const initialStateUpdate = {
    loading: false,
    success: null,
    error: null
  };
  export const updateProfileReducer = (state = initialStateUpdate, action) => {
    switch (action.type) {
      case UPDATE_PROFILE:
        return { ...state, loading:true};
      case UPDATE_SUCCESS:
        return { ...state, success: action.payload };
      case UPDATE_FAILED:
        return {...state, loading: false, error:"error"};
      default:
        return state;
    }
  };