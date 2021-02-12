import {
  getBusesReducer,
  editBusReducer,
  deleteBusReducer,
  createBusReducer
} from '../../../redux/reducers/busesReducer';
import {
  GETTING_BUSES_ERROR,
  GETTING_BUSES_SUCCESS,
  EDIT_BUS_ERROR,
  EDIT_BUS_SUCCESS,
  DELETE_BUS_ERROR,
  DELETE_BUS_SUCCESS,
  CREATE_BUS_ERROR,
  CREATE_BUS_SUCCESS
} from '../../../redux/actionTypes/actionTypes';

describe('Testing buses reducer', () => {
  const initialGetBusesState = {
    fetching: false,
    fetched: false,
    roles: null,
    onError: null
  };

  const initialCreateBusState = {
    creating: false,
    onSuccess: '',
    onError: null
  };

  const initialEditBusState = {
    editing: false,
    onSuccess: null,
    onError: null
  };
  const initialDeleteBusState = {
    deleting: false,
    onSuccess: '',
    onError: null
  };

  it('Should test success get buses reducer', () => {
    expect(
      getBusesReducer(initialGetBusesState, {
        type: GETTING_BUSES_SUCCESS,
        payload: 'test'
      })
    ).toEqual({ ...initialGetBusesState, fetched: true, buses: 'test' });
  });

  it('Should test failure get buses reducer', () => {
    expect(
      getBusesReducer(initialGetBusesState, {
        type: GETTING_BUSES_ERROR,
        payload: 'error'
      })
    ).toEqual({ ...initialGetBusesState, onError: 'error' });
  });
  it('Should test create bus success reducer', () => {
    expect(
      createBusReducer(initialCreateBusState, {
        type: CREATE_BUS_SUCCESS,
        payload: 'success'
      })
    ).toEqual({ ...initialCreateBusState, onSuccess: 'success' });
  });
  it('Should test create bus failure reducer', () => {
    expect(
      createBusReducer(initialCreateBusState, {
        type: CREATE_BUS_ERROR,
        payload: 'error'
      })
    ).toEqual({ ...initialCreateBusState, onError: 'error' });
  });
  it('Should test edit bus success reducer', () => {
    expect(
      editBusReducer(initialEditBusState, {
        type: EDIT_BUS_SUCCESS,
        payload: 'success'
      })
    ).toEqual({ ...initialEditBusState, onSuccess: 'success' });
  });
  it('Should test edit bus failure reducer', () => {
    expect(
      editBusReducer(initialEditBusState, {
        type: EDIT_BUS_ERROR,
        payload: 'error'
      })
    ).toEqual({ ...initialEditBusState, onError: 'error' });
  });
  it('Should test delete bus success reducer', () => {
    expect(
      deleteBusReducer(initialDeleteBusState, {
        type: DELETE_BUS_SUCCESS,
        payload: 'deleted'
      })
    ).toEqual({ ...initialDeleteBusState, onSuccess: 'deleted' });
  });
  it('Should test delete bus failure reducer', () => {
    expect(
      deleteBusReducer(initialDeleteBusState, {
        type: DELETE_BUS_ERROR,
        payload: 'error'
      })
    ).toEqual({ ...initialDeleteBusState, onError: 'error' });
  });
});
