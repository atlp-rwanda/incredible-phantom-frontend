import {
  FORGOT_FAILED,
  FORGOT_PENDING,
  FORGOT_SUCCESS,
  RESET_FAILED,
  RESET_PENDING,
  RESET_SUCCESS,
} from '../actionTypes/actionTypes';

const initialState = {
  res: '',
};

export const forgotReducer = (state = initialState, action) => {
  switch (action.type) {
    case FORGOT_PENDING:
      return { ...state };
    case FORGOT_SUCCESS:
      return { ...state, res: action.payload };
    case FORGOT_FAILED:
      return { ...state, res: action.payload };

    default:
      return state;
  }
};

const initialStateReset = {
  success: null,
};
export const resetReducer = (state = initialStateReset, action) => {
  switch (action.type) {
    case RESET_PENDING:
      return { ...state };
    case RESET_SUCCESS:
      return { ...state, success: action.payload };
    case RESET_FAILED:
      return { ...state, success: action.payload };

    default:
      return state;
  }
};
