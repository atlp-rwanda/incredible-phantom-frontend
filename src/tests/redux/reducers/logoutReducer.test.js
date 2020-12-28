import {
  LOGOUT_SUCCESS,
  LOGOUT_REQUEST,
  LOGOUT_ERROR,
} from '../../../redux/actionTypes/actionTypes';
import { logoutReducer } from '../../../redux/reducers/logoutReducer';

describe('logout out reducer', () => {
  const initialState = {
    loading: false,
    success: false,
  };

  it('Should test logout reducer  when success', () => {
    expect(
      logoutReducer(initialState, {
        type: LOGOUT_SUCCESS,
        payload: true,
      }),
    ).toEqual({ ...initialState, success: true });
  });

  it('Should test logout reducer when requested', () => {
    expect(
      logoutReducer(initialState, {
        type: LOGOUT_REQUEST,
      }),
    ).toEqual({ ...initialState, loading: true });
  });

  it('Should test logout reducer when there is error', () => {
    expect(
      logoutReducer(initialState, {
        type: LOGOUT_ERROR,
        payload: 'error',
      }),
    ).toEqual({
      ...initialState,
      loading: false,
      error: 'error',
    });
  });
});
