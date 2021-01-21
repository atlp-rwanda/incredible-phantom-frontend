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
} from '../../../redux/actionTypes/actionTypes';
import {
  registerReducer,
  deleteOperatorReducer,
  editOperatorReducer,
  getOperatorReducer
} from '../../../redux/reducers/registerOperatorReducer';

describe('Tests of getting Operator', () => {
  const initialState = {
    res: '',
    loading: true
  };
  const initialStateGet = {
    loading: false,
    res: '',
    error: null
  };

  it('Should test getting Operator loading', () => {
    expect(
      getOperatorReducer(initialState, {
        type: FETCH_OPERATOR_LOADING
      })
    ).toEqual({ ...initialState, res: '' });
  });

  it('Should test getting Operator', () => {
    expect(
      getOperatorReducer(initialStateGet, {
        type: FETCHED_OPERATOR
      })
    ).toEqual({ ...initialStateGet, res: '' });
  });
  it('Should test getting Operator Failed', () => {
    expect(
      getOperatorReducer(initialStateGet, {
        type: ERROR_FETCH_OPERATOR
      })
    ).toEqual({ ...initialStateGet, error: undefined });
  });
});

describe('Tests Editing OPERATOR info', () => {
  const initialEditOperatorState = {
    editing: true,
    onSuccess: null,
    onError: null
  };

  it('Should test editing  OPERATOR info loading', () => {
    expect(
      editOperatorReducer(initialEditOperatorState, {
        type: EDIT_OPERATOR
      })
    ).toEqual({ ...initialEditOperatorState, onError: null });
  });

  it('Should test  OPERATOR info success', () => {
    expect(
      editOperatorReducer(initialEditOperatorState, {
        type: EDIT_OPERATOR_SUCCESS,
        payload: 'hello'
      })
    ).toEqual({ ...initialEditOperatorState, onSuccess: 'hello' });
  });

  it('Should test  OPERATOR info fail', () => {
    expect(
      editOperatorReducer(initialEditOperatorState, {
        type: EDIT_OPERATOR_ERROR,
        payload: 'hello'
      })
    ).toEqual({ ...initialEditOperatorState, onError: 'hello' });
  });
});

describe('Tests Register OPERATOR', () => {
  const initialState = {
    res: null,
    error: null
  };
  it('Should test register  OPERATOR  loading', () => {
    expect(
      registerReducer(initialState, {
        type: REGISTER_PENDING
      })
    ).toEqual({ ...initialState, res: null });
  });

  it('Should test register  OPERATOR  success', () => {
    expect(
      registerReducer(initialState, {
        type: REGISTER_SUCCESS,
        payload: 'test'
      })
    ).toEqual({ ...initialState, res: 'test' });
  });

  it('Should test register  OPERATOR  success', () => {
    expect(
      registerReducer(initialState, {
        type: REGISTER_FAILED,
        payload: 'test'
      })
    ).toEqual({ ...initialState, error: 'test' });
  });
});

describe('Tests delete OPERATOR', () => {
  const initialDeleteOperatortate = {
    deleting: false,
    onSuccess: '',
    onError: null
  };
  it('Should test delete  OPERATOR  loading', () => {
    expect(
      deleteOperatorReducer(initialDeleteOperatortate, {
        type: DELETE_OPERATOR
      })
    ).toEqual({ ...initialDeleteOperatortate, deleting: true });
  });

  it('Should test delete  OPERATOR  success', () => {
    expect(
      deleteOperatorReducer(initialDeleteOperatortate, {
        type: DELETE_OPERATOR_SUCCESS,
        payload: 'egide'
      })
    ).toEqual({ ...initialDeleteOperatortate, onSuccess: 'egide' });
  });
  it('Should test delete  OPERATOR  failed', () => {
    expect(
      deleteOperatorReducer(initialDeleteOperatortate, {
        type: DELETE_OPERATOR_ERROR,
        payload: 'egide'
      })
    ).toEqual({ ...initialDeleteOperatortate, onError: 'egide' });
  });
});
