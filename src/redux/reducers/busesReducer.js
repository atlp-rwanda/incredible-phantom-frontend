import {
  GETTING_BUSES,
  GETTING_BUSES_ERROR,
  GETTING_BUSES_SUCCESS,
  EDIT_BUS,
  EDIT_BUS_ERROR,
  EDIT_BUS_SUCCESS,
  DELETE_BUS,
  DELETE_BUS_ERROR,
  DELETE_BUS_SUCCESS,
  CREATE_BUS,
  CREATE_BUS_ERROR,
  CREATE_BUS_SUCCESS
} from '../actionTypes/actionTypes';

const initialGetBusesState = {
  fetching: false,
  fetched: false,
  buses: null,
  onError: null
};

export const getBusesReducer = (state = initialGetBusesState, action) => {
  switch (action.type) {
    case GETTING_BUSES:
      return { ...state, fetching: true };
    case GETTING_BUSES_SUCCESS:
      return {
        ...state,
        fetching: false,
        fetched: true,
        buses: action.payload
      };
    case GETTING_BUSES_ERROR:
      return { ...state, onError: action.payload };
    default:
      return state;
  }
};

const initialCreateBusState = {
  creating: false,
  onSuccess: '',
  onError: null
};

export const createBusReducer = (state = initialCreateBusState, action) => {
  switch (action.type) {
    case CREATE_BUS:
      return { ...state, creating: true };
    case CREATE_BUS_SUCCESS:
      return { ...state, onSuccess: action.payload };
    case CREATE_BUS_ERROR:
      return { ...state, onError: action.payload };
    default:
      return state;
  }
};

const initialEditBusState = {
  editing: false,
  onSuccess: null,
  onError: null
};

export const editBusReducer = (state = initialEditBusState, action) => {
  switch (action.type) {
    case EDIT_BUS:
      return { ...state, editing: true };
    case EDIT_BUS_SUCCESS:
      return { ...state, onSuccess: action.payload };
    case EDIT_BUS_ERROR:
      return { ...state, onError: action.payload };
    default:
      return state;
  }
};

const initialDeleteBusState = {
  deleting: false,
  onSuccess: '',
  onError: null
};

export const deleteBusReducer = (state = initialDeleteBusState, action) => {
  switch (action.type) {
    case DELETE_BUS:
      return { ...state, deleting: true };
    case DELETE_BUS_SUCCESS:
      return { ...state, onSuccess: action.payload };
    case DELETE_BUS_ERROR:
      return { ...state, onError: action.payload };
    default:
      return state;
  }
};
