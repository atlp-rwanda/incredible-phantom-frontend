import {
  GETTING_ROLES_ERROR,
  GETTING_ROLES_SUCCESS,
  EDIT_ROLE_ERROR,
  EDIT_ROLE_SUCCESS,
  DELETE_ROLE_ERROR,
  DELETE_ROLE_SUCCESS,
  CREATE_ROLE_ERROR,
  CREATE_ROLE_SUCCESS
} from '../actionTypes/actionTypes';

const initialGetRolesState = {
  fetching: false,
  fetched: false,
  roles: null,
  onError: null
};

export const getRolesReducer = (state = initialGetRolesState, action) => {
  switch (action.type) {
    case GETTING_ROLES_SUCCESS:
      return {
        ...state,
        fetching: false,
        fetched: true,
        roles: action.payload
      };
    case GETTING_ROLES_ERROR:
      return { ...state, onError: action.payload };
    default:
      return state;
  }
};

const initialCreateRoleState = {
  creating: false,
  onSuccess: '',
  onError: null
};

export const createRoleReducer = (state = initialCreateRoleState, action) => {
  switch (action.type) {
    case CREATE_ROLE_SUCCESS:
      return { ...state, onSuccess: action.payload };
    case CREATE_ROLE_ERROR:
      return { ...state, onError: action.payload };
    default:
      return state;
  }
};

const initialEditRoleState = {
  editing: false,
  onSuccess: null,
  onError: null
};

export const editRoleReducer = (state = initialEditRoleState, action) => {
  switch (action.type) {
    case EDIT_ROLE_SUCCESS:
      return { ...state, onSuccess: action.payload };
    case EDIT_ROLE_ERROR:
      return { ...state, onError: action.payload };
    default:
      return state;
  }
};

const initialDeleteRoleState = {
  deleting: false,
  onSuccess: '',
  onError: null
};

export const deleteRoleReducer = (state = initialDeleteRoleState, action) => {
  switch (action.type) {
    case DELETE_ROLE_SUCCESS:
      return { ...state, onSuccess: action.payload };
    case DELETE_ROLE_ERROR:
      return { ...state, onError: action.payload };
    default:
      return state;
  }
};
