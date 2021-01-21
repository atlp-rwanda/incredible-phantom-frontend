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
} from '../../../redux/actionTypes/actionTypes';
import {
  registerDriverReducer,
  deleteDriverReducer,
  editDriverReducer,
  getDriverReducer
} from '../../../redux/reducers/registerDriverReducer';

describe('Tests of getting drivers', () => {
  const initialState = {
    res: '',
    loading: true
  };
  const initialStateGet = {
    loading: false,
    res: '',
    error: null
  };

  it('Should test getting Drivers loading', () => {
    expect(
      getDriverReducer(initialState, {
        type: FETCH_DRIVER_LOADING
      })
    ).toEqual({ ...initialState, res: '' });
  });

  it('Should test getting Drivers', () => {
    expect(
      getDriverReducer(initialStateGet, {
        type: FETCHED_DRIVER
      })
    ).toEqual({ ...initialStateGet, res: '' });
  });
  it('Should test getting Drivers Failed', () => {
    expect(
      getDriverReducer(initialStateGet, {
        type: ERROR_FETCH_DRIVER
      })
    ).toEqual({ ...initialStateGet, error: undefined });
  });
});

describe('Tests Editing Driver info', () => {
  const initialEditOperatorState = {
    editing: true,
    onSuccess: null,
    onError: null
  };

  it('Should test editing  Driver info loading', () => {
    expect(
      editDriverReducer(initialEditOperatorState, {
        type: EDIT_DRIVER
      })
    ).toEqual({ ...initialEditOperatorState, onError: null });
  });

  it('Should test  Driver info success', () => {
    expect(
      editDriverReducer(initialEditOperatorState, {
        type: EDIT_DRIVER_SUCCESS,
        payload: 'hello'
      })
    ).toEqual({ ...initialEditOperatorState, onSuccess: 'hello' });
  });

  it('Should test  Driver info fail', () => {
    expect(
      editDriverReducer(initialEditOperatorState, {
        type: EDIT_DRIVER_ERROR,
        payload: 'hello'
      })
    ).toEqual({ ...initialEditOperatorState, onError: 'hello' });
  });
});

describe('Tests Register driver', () => {
  const initialState = {
    res: null,
    error: null
  };
  it('Should test register  Driver  loading', () => {
    expect(
      registerDriverReducer(initialState, {
        type: REGISTER_DRIVER_PENDING
      })
    ).toEqual({ ...initialState, res: null });
  });

  it('Should test register  Driver  success', () => {
    expect(
      registerDriverReducer(initialState, {
        type: REGISTER_DRIVER_SUCCESS,
        payload: 'test'
      })
    ).toEqual({ ...initialState, res: 'test' });
  });

  it('Should test register  Driver  success', () => {
    expect(
      registerDriverReducer(initialState, {
        type: REGISTER_DRIVER_FAILED,
        payload: 'test'
      })
    ).toEqual({ ...initialState, error: 'test' });
  });
});

describe('Tests delete Driver', () => {
  const initialDeleteDriverState = {
    deleting: false,
    onSuccess: '',
    onError: null
  };
  it('Should test delete  Driver  loading', () => {
    expect(
      deleteDriverReducer(initialDeleteDriverState, {
        type: DELETE_DRIVER
      })
    ).toEqual({ ...initialDeleteDriverState, deleting: true });
  });

  it('Should test delete  Driver  success', () => {
    expect(
      deleteDriverReducer(initialDeleteDriverState, {
        type: DELETE_DRIVER_SUCCESS,
        payload: 'egide'
      })
    ).toEqual({ ...initialDeleteDriverState, onSuccess: 'egide' });
  });
  it('Should test delete  Driver  failed', () => {
    expect(
      deleteDriverReducer(initialDeleteDriverState, {
        type: DELETE_DRIVER_ERROR,
        payload: 'egide'
      })
    ).toEqual({ ...initialDeleteDriverState, onError: 'egide' });
  });
});
