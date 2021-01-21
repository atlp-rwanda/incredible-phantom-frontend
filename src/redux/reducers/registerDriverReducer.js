import {
  REGISTER_DRIVER_PENDING,
  REGISTER_DRIVER_SUCCESS,
  REGISTER_DRIVER_FAILED,
  FETCH_DRIVER_LOADING,
  FETCHED_DRIVER,
  ERROR_FETCH_DRIVER,
  DELETE_DRIVER_SUCCESS,
  DELETE_DRIVER_ERROR,
  EDIT_DRIVER_SUCCESS,
  DELETE_DRIVER,
  EDIT_DRIVER,
  EDIT_DRIVER_ERROR
} from '../actionTypes/actionTypes';

const initialState = {
  res: '',
  error: null
};

export const registerDriverReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_DRIVER_PENDING:
      return { ...state };
    case REGISTER_DRIVER_SUCCESS:
      return { ...state, res: action.payload };
    case REGISTER_DRIVER_FAILED:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};
const initialStateGet = {
  loading: false,
  data: [],
  error: ''
};
export const getDriverReducer = (state = initialStateGet, action) => {
  switch (action.type) {
    case FETCH_DRIVER_LOADING:
      return { ...state, loading: true };

    case FETCHED_DRIVER:
      return { ...state, data: action.payload, loading: false };
    case ERROR_FETCH_DRIVER:
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

export const editDriverReducer = (state = initialEditOperatorState, action) => {
  switch (action.type) {
    case EDIT_DRIVER:
      return { ...state, editing: true };
    case EDIT_DRIVER_SUCCESS:
      return { ...state, onSuccess: action.payload };
    case EDIT_DRIVER_ERROR:
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

export const deleteDriverReducer = (
  state = initialDeleteOperatorState,
  action
) => {
  switch (action.type) {
    case DELETE_DRIVER:
      return { ...state, deleting: true };
    case DELETE_DRIVER_SUCCESS:
      return { ...state, onSuccess: action.payload };
    case DELETE_DRIVER_ERROR:
      return { ...state, onError: action.payload };
    default:
      return state;
  }
};
