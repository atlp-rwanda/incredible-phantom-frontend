import {
  REGISTER_FAILED,
  REGISTER_SUCCESS,
  REGISTER_PENDING,
  FETCH_OPERATOR_LOADING,
  FETCHED_OPERATOR,
  ERROR_FETCH_OPERATOR,
  DELETE_OPERATOR,
  DELETE_OPERATOR_SUCCESS,
  DELETE_OPERATOR_ERROR,
  EDIT_OPERATOR_SUCCESS,
  EDIT_OPERATOR,
  EDIT_OPERATOR_ERROR
} from '../actionTypes/actionTypes';

const initialState = {
  res: '',
  error: null
};

export const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_PENDING:
      return { ...state };
    case REGISTER_SUCCESS:
      return { ...state, res: action.payload };
    case REGISTER_FAILED:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};
export const initialStateGet = {
  loading: true,
  data: [],
  error: ''
};
export const getOperatorReducer = (state = initialStateGet, action) => {
  switch (action.type) {
    case FETCH_OPERATOR_LOADING:
      return { ...state, loading: true };

    case FETCHED_OPERATOR:
      return { ...state, data: action.payload, loading: false };
    case ERROR_FETCH_OPERATOR:
      return { ...state, error: action.payload, loading: false };

    default:
      return state;
  }
};
const initialEditOperatorState = {
  editing: false,
  onSuccess: null,
  onError: null
};

export const editOperatorReducer = (
  state = initialEditOperatorState,
  action
) => {
  switch (action.type) {
    case EDIT_OPERATOR:
      return { ...state, editing: true };
    case EDIT_OPERATOR_SUCCESS:
      return { ...state, onSuccess: action.payload };
    case EDIT_OPERATOR_ERROR:
      return { ...state, onError: action.payload };
    default:
      return state;
  }
};

const initialDeleteOperatorState = {
  deleting: false,
  onSuccess: '',
  onError: null
};

export const deleteOperatorReducer = (
  state = initialDeleteOperatorState,
  action
) => {
  switch (action.type) {
    case DELETE_OPERATOR:
      return { ...state, deleting: true };
    case DELETE_OPERATOR_SUCCESS:
      return { ...state, onSuccess: action.payload };
    case DELETE_OPERATOR_ERROR:
      return { ...state, onError: action.payload };
    default:
      return state;
  }
};
