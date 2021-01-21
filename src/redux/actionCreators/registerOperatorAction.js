import axios from 'axios';
import { toast } from 'react-toastify';
import i18next from 'i18next';
import { token, BACKEND_URL } from '../../helpers/url';
import {
  REGISTER_FAILED,
  REGISTER_PENDING,
  REGISTER_SUCCESS,
  FETCH_OPERATOR_LOADING,
  FETCHED_OPERATOR,
  ERROR_FETCH_OPERATOR,
  DELETE_OPERATOR,
  DELETE_OPERATOR_SUCCESS,
  DELETE_OPERATOR_ERROR,
  EDIT_OPERATOR_SUCCESS,
  EDIT_OPERATOR,
  EDIT_OPERATOR_ERROR
} from '../actionTypes/actionTypes';

export const RegisterAction = (data) => async (dispatch) => {
  dispatch({ type: REGISTER_PENDING });
  try {
    const authHeader = `Bearer ${token}`;
    const res = await axios.post(
      `${BACKEND_URL}/api/users`,
      {
        ...data,
        role: 'operator'
      },
      {
        headers: {
          auth: authHeader
        }
      }
    );
    dispatch({ type: REGISTER_SUCCESS, payload: res.data.message });
    res.status === 201 && toast.success(i18next.t('operator.registered'));
  } catch (error) {
    error.response && toast.info(error.response.data.message);
    dispatch({ type: REGISTER_FAILED, payload: error.response.data.message });
  }
};
export const getAllOperatorAction = () => async (dispatch) => {
  dispatch({ type: FETCH_OPERATOR_LOADING, payload: true });
  try {
    const authHeader = `Bearer ${token}`;
    const response = await axios.get(`${BACKEND_URL}/api/users`, {
      headers: {
        auth: authHeader
      }
    });
    dispatch({
      type: FETCHED_OPERATOR,
      payload: response.data.data
    });
  } catch (error) {
    dispatch({
      type: ERROR_FETCH_OPERATOR,
      payload: error.response.data.message
    });
  }
};
export const deleteOperatorAction = (operatorID) => async (dispatch) => {
  dispatch({ type: DELETE_OPERATOR });
  try {
    const authHeader = `Bearer ${token}`;
    const response = await axios({
      method: 'DELETE',
      url: `${BACKEND_URL}/api/users/${operatorID}`,
      headers: {
        auth: authHeader
      }
    });
    toast.success(i18next.t('operator.deleted'));
    dispatch({ type: DELETE_OPERATOR_SUCCESS, payload: response.data.message });
  } catch (error) {
    error.response.status === 400 && toast.info(error.response.data.message);

    dispatch({
      type: DELETE_OPERATOR_ERROR,
      payload: error.response.data.message
    });
  }
};
export const editOperatorAction = (
  numberID,
  inputFirstnane,
  inputLastnane,
  inputPhone
) => async (dispatch) => {
  dispatch({ type: EDIT_OPERATOR });
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

    dispatch({ type: EDIT_OPERATOR_SUCCESS, payload: response.data.message });
  } catch (error) {
    error && toast.info(error.response.data.message);
    dispatch({
      type: EDIT_OPERATOR_ERROR,
      payload: error.response.data.message
    });
  }
};
