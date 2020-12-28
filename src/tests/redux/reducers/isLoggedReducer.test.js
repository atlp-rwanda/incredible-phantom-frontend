import loggedReducer from '../../../redux/reducers/isLogged';
import {
  SET_LOADING,
  SET_LOGIN,
  SET_LOGIN_ERROR
} from '../../../redux/actionTypes/actionTypes';

describe('log in reducer', () => {
  const initialState = {
    loading: false,
    isLoggedIn: false,
    token: null,
    error: null
  };

  it('Should test login reducer in loading', () => {
    expect(
      loggedReducer(initialState, {
        type: SET_LOADING
      })
    ).toEqual({ error: null, isLoggedIn: false, loading: true, token: null });
  });

  it('Should test login reducer', () => {
    expect(
      loggedReducer(initialState, {
        type: SET_LOGIN,
        payload: 'test'
      })
    ).toEqual({ isLoggedIn: true, loading: false, token: 'test', error: null });
  });

  it('Should test login reducer when failed', () => {
    expect(
      loggedReducer(initialState, {
        type: SET_LOGIN_ERROR,
        payload: 'error'
      })
    ).toEqual({
      loading: false,
      error: 'error',
      isLoggedIn: false,
      token: null
    });
  });
});
