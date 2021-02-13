import {viewProfileReducer} from '../../../redux/reducers/viewProfileReducer';
import {updateProfileReducer} from '../../../redux/reducers/updateProfileReducer';

import {
  VIEW_SUCCESS,
  VIEW_FAIL,
  VIEW_PROFILE,
  UPDATE_SUCCESS,
  UPDATE_FAILED,
  UPDATE_PROFILE
} from '../../../redux/actionTypes/profileType';

describe('VIEW and UPDATE Profile reducer', () => {
  const initialState = {
    data: '',
    loading: false,
    error: null
  };
  const initialStateUpdate = {
    data:null,
    error: null,
    loading: false
  }
  it('Should test ViewProfile reducer', () => {
    expect(
      viewProfileReducer(initialState, {
        type: VIEW_SUCCESS,
        payload:'Hello'
      })
    ).toEqual({ ...initialState, data:'Hello' });
  });

  it('Should test ViewProfile reducer when Loading', () => {
    expect(
      viewProfileReducer(initialState, {
        type: VIEW_PROFILE,
        payload:'Hello'
      })
    ).toEqual({ ...initialState, loading:true });
  });

  it('Should test View Profile reducer when failed', () => {
    expect(
      viewProfileReducer(initialState, {
        type: VIEW_FAIL,
        payload: 'si'
      })
    ).toEqual({ ...initialState, error:'si'});
  });

  it('Should test UPDATE Profile reducer', () => {
    expect(
      updateProfileReducer(initialStateUpdate, {
        type: UPDATE_SUCCESS,
        payload:'SIBO'

      })
    ).toEqual({...initialStateUpdate, success:'SIBO'});
  });

  it('Should test UpdateProfile reducer when Loading', () => {
    expect(
      updateProfileReducer(initialStateUpdate, {
        type: UPDATE_PROFILE,
        
      })
    ).toEqual({ ...initialStateUpdate, loading:true });
  });

  it('Should test Update Profile reducer when failed', () => {
    expect(
      updateProfileReducer(initialStateUpdate, {
        type: UPDATE_FAILED
      })
    ).toEqual({
      ...initialStateUpdate, error:'error'});
  });
});
