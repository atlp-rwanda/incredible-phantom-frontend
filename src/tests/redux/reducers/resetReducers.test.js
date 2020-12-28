import {
  forgotReducer,
  resetReducer,
} from '../../../redux/reducers/resetReducer';
import {
  RESET_SUCCESS,
  RESET_FAILED,
  FORGOT_SUCCESS,
  FORGOT_FAILED,
} from '../../../redux/actionTypes/actionTypes';

describe('Forgot and Reset reducer', () => {
  const initialState = {
    res: '',
  };
  const initialStateReset = {
    success: null,
  };
  it('Should test forgot reducer', () => {
    expect(
      forgotReducer(initialState, {
        type: FORGOT_SUCCESS,
        payload: 'test',
      }),
    ).toEqual({ res: 'test' });
  });

  it('Should test forgot reducer when failed', () => {
    expect(
      forgotReducer(initialState, {
        type: FORGOT_FAILED,
        payload: 'test',
      }),
    ).toEqual({ res: 'test' });
  });

  it('Should test reset reducer', () => {
    expect(
      resetReducer(initialStateReset, {
        type: RESET_SUCCESS,
        payload: 'hello',
      }),
    ).toEqual({
      success: 'hello',
    });
  });

  it('Should test reset reducer when failed', () => {
    expect(
      resetReducer(initialStateReset, {
        type: RESET_FAILED,
        payload: 'error',
      }),
    ).toEqual({
      success: 'error',
    });
  });
});
