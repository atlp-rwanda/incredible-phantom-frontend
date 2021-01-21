import axios from 'axios';
import { toast } from 'react-toastify';
import i18next from 'i18next';
import { token, BACKEND_URL } from '../../helpers/url';
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
} from '../actionTypes/actionTypes';

export const RegisterDriverAction = (data) => async (dispatch) => {
  dispatch({ type: REGISTER_DRIVER_PENDING });
  try {
    const authHeader = `Bearer ${token}`;
    const res = await axios.post(
      `${BACKEND_URL}/api/users`,
      {
        ...data,
        role: 'driver'
      },
      {
        headers: {
          auth: authHeader
        }
      }
    );
    dispatch({ type: REGISTER_DRIVER_SUCCESS, payload: res.data.message });
    res.success === true && toast.success(i18next.t('drivers.registered'));
  } catch (error) {
    error.response && toast.info(error.response.data.message);
    dispatch({
      type: REGISTER_DRIVER_FAILED,
      payload: error.response.data.message
    });
  }
};
export const getAllDriverAction = () => async (dispatch) => {
  dispatch({ type: FETCH_DRIVER_LOADING });
  try {
    const authHeader = `Bearer ${token}`;
    const response = await axios.get(`${BACKEND_URL}/api/users`, {
      headers: {
        auth: authHeader
      }
    });
    dispatch({
      type: FETCHED_DRIVER,
      payload: response.data.data
    });
  } catch (error) {
    dispatch({
      type: ERROR_FETCH_DRIVER,
      payload: error.response.data.message
    });
  }
};
export const deleteDriverAction = (driverID) => async (dispatch) => {
  dispatch({ type: DELETE_DRIVER });
  try {
    const authHeader = `Bearer ${token}`;
    const response = await axios({
      method: 'DELETE',
      url: `${BACKEND_URL}/api/users/${driverID}`,
      headers: {
        auth: authHeader
      }
    });
    toast.success(i18next.t('drivers.deleted'));
    dispatch({ type: DELETE_DRIVER_SUCCESS, payload: response.data.message });
  } catch (error) {
    error && toast.info(error.response.data.message);
    dispatch({
      type: DELETE_DRIVER_ERROR,
      payload: error.response.data.message
    });
  }
};
export const editDriverAction = (
  numberID,
  inputFirstnane,
  inputLastnane,
  inputPhone
) => async (dispatch) => {
  dispatch({ type: EDIT_DRIVER });
  try {
    const authHeader = `Bearer ${token}`;
    const response = await axios({
      method: 'PATCH',
      url: `${BACKEND_URL}/api/users/update/${numberID}`,
      headers: {
        auth: authHeader
      },
      data: {
        firstName: inputFirstnane,
        lastName: inputLastnane,
        phone: inputPhone.toLowerCase()
      }
    });
    dispatch({ type: EDIT_DRIVER_SUCCESS, payload: response.data.message });
  } catch (error) {
    error.response.status === 400 && toast.info(error.response.data.message);

    dispatch({ type: EDIT_DRIVER_ERROR, payload: error.response.data.message });
  }
};
