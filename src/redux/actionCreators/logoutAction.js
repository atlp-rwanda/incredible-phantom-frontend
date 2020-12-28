import axios from 'axios';
import { BACKEND_URL } from '../../helpers/url';
import {
  LOGOUT_ERROR,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
} from '../actionTypes/actionTypes';

export const logoutAction = (history) => async (dispatch) => {
  dispatch({ type: LOGOUT_REQUEST });
  const token = localStorage.getItem('authToken');
  try {
    const res = await axios.post(`${BACKEND_URL}/api/users/logout`, '', {
      headers: {
        auth: `Bearer ${token}`,
      },
    });
      dispatch({ type: LOGOUT_SUCCESS, payload: res.data.success });
      localStorage.removeItem('authToken');
      history.push('/signin');
  } catch (error) {
    dispatch({ type: LOGOUT_ERROR, payload: error });
  }
};
