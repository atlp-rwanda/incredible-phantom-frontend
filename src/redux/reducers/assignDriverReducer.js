import {
  GET_DRIVERS_FAILED,
  GET_DRIVERS_SUCCESS,
  ASSIGN_BUSDRIVER_SUCCESS,
  ASSIGN_BUSDRIVER_FAILED,
  UNASSIGN_BUSDRIVER_FAILED,
  UNASSIGN_BUSDRIVER_SUCCESS,
  GET_BUS_FAILED,
  GET_BUS_SUCCESS,
} from "../actionTypes/actionTypes";

const initialGetDriversState = {
  fetching: false,
  fetched: false,
  data: null,
  onError: "",
};

export const fetchDriverReducer = (state = initialGetDriversState, action) => {
  switch (action.type) {
    case GET_DRIVERS_SUCCESS:
      return {
        ...state,
        fetching: false,
        fetched: true,
        data: action.payload,
      };
    case GET_DRIVERS_FAILED:
      return { ...state, onError: action.payload };
    default:
      return state;
  }
};

const initialAssignDriver = {
  onError: null,
  onSuccess: null,
  assign: false,
};

export const assignDriveReducer = (state = initialAssignDriver, action) => {
  switch (action.type) {
    case ASSIGN_BUSDRIVER_SUCCESS:
      return { ...state, onSuccess: action.payload };

    case ASSIGN_BUSDRIVER_FAILED:
      return { ...state, onError: action.payload };

    default:
      return state;
  }
};

const initialUnassignDriver = {
  onError: null,
  onSuccess: null,
  unAssign: false,
};

export const UnassignDriverReducer = (
  state = initialUnassignDriver,
  action
) => {
  switch (action.type) {
    case UNASSIGN_BUSDRIVER_SUCCESS:
      return { ...state, onSuccess: action.payload };

    case UNASSIGN_BUSDRIVER_FAILED:
      return { ...state, onError: action.payload };

    default:
      return state;
  }
};

const initialGetBus = {
  fetching: false,
  fetched: false,
  data: null,
  onError: "",
};

export const getBusReducer = (state = initialGetBus, action) => {
  switch (action.type) {
    case GET_BUS_SUCCESS:
      return {
        ...state,
        fetching: false,
        fetched: true,
        data: action.payload,
      };

    case GET_BUS_FAILED:
      return {
        ...state,
        onError: action.payload,
      };
    default:
      return state;
  }
};
