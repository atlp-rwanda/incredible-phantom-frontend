import axios from 'axios';
import { toast } from 'react-toastify';
import i18next from 'i18next';
import { BACKEND_URL } from '../../helpers/url';
import {
  GET_ROUTES_PENDING,
  GET_ROUTES_SUCCESS,
  GET_ROUTES_FAILED
} from '../actionTypes/actionTypes';
import { token } from '../../components/Roles/helpers';

export const getRoutesAction = () => async (dispatch) => {
  dispatch({
    type: GET_ROUTES_PENDING
  });
  try {
    const authHeader = `Bearer ${token}`;
    const response = await axios({
      method: 'GET',
      url: `http://localhost:3000/api/route`,
      headers: {
        auth: authHeader
      }
    });
    dispatch({
      type: GET_ROUTES_SUCCESS,
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type: GET_ROUTES_FAILED,
      payload: error.response
    });
  }
};
