import {
  GETTING_ROUTES,
  GETTING_ROUTES_ERROR,
  GETTING_ROUTES_SUCCESS,
  EDIT_ROUTE,
  EDIT_ROUTE_ERROR,
  EDIT_ROUTE_SUCCESS,
  DELETE_ROUTE,
  DELETE_ROUTE_ERROR,
  DELETE_ROUTE_SUCCESS,
  CREATE_ROUTE,
  CREATE_ROUTE_ERROR,
  CREATE_ROUTE_SUCCESS
} from '../actionTypes/actionTypes';


const initialGetRoutesState = {
  fetching: false,
  fetched: false,
  routes: null,
  onError: null
};

export const getRoutesReducer = (state = initialGetRoutesState, action) => {
  switch (action.type) {
    case GETTING_ROUTES:
      return { ...state, fetching: true };
    case GETTING_ROUTES_SUCCESS:
      return {
        ...state,
        fetching: false,
        fetched: true,
        routes: action.payload
      };
    case GETTING_ROUTES_ERROR:
      return { ...state, onError: action.payload };
    default:
      return state;
  }
};

const initialCreateRouteState = {
  creating: false,
  onSuccess: '',
  onError: null
};

export const createRouteReducer = (state = initialCreateRouteState, action) => {
  switch (action.type) {
    case CREATE_ROUTE:
      return { ...state, creating: true };
    case CREATE_ROUTE_SUCCESS:
      return { ...state, onSuccess: action.payload };
    case CREATE_ROUTE_ERROR:
      return { ...state, onError: action.payload };
    default:
      return state;
  }
};

const initialEditRouteState = {
  editing: false,
  onSuccess: null,
  onError: null
};

export const editRouteReducer = (state = initialEditRouteState, action) => {
  switch (action.type) {
    case EDIT_ROUTE:
      return { ...state, editing: true };
    case EDIT_ROUTE_SUCCESS:
      return { ...state, onSuccess: action.payload };
    case EDIT_ROUTE_ERROR:
      return { ...state, onError: action.payload };
    default:
      return state;
  }
};

const initialDeleteRouteState = {
  deleting: false,
  onSuccess: '',
  onError: null
};

export const deleteRouteReducer = (state = initialDeleteRouteState, action) => {
  switch (action.type) {
    case DELETE_ROUTE:
      return { ...state, deleting: true };
    case DELETE_ROUTE_SUCCESS:
      return { ...state, onSuccess: action.payload };
    case DELETE_ROUTE_ERROR:
      return { ...state, onError: action.payload };
    default:
      return state;
  }
};
