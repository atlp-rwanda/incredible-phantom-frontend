import axios from 'axios';
import { toast } from 'react-toastify';
import i18next from 'i18next';
import { BACKEND_URL } from '../../helpers/url';
import {
  GETTING_ROLES_ERROR,
  GETTING_ROLES_SUCCESS,
  EDIT_ROLE_ERROR,
  EDIT_ROLE_SUCCESS,
  DELETE_ROLE_ERROR,
  DELETE_ROLE_SUCCESS,
  CREATE_ROLE_ERROR,
  CREATE_ROLE_SUCCESS
} from '../actionTypes/actionTypes';
import { token } from '../../components/Roles/helpers';

export const getRolesAction = () => async (dispatch) => {
  try {
    const authHeader = `Bearer ${token}`;
    const response = await axios({
      method: 'GET',
      url: `${BACKEND_URL}/api/roles`,
      headers: {
        auth: authHeader
      }
    });
    let data = response.data.data;
    let sortedData = data.reverse();
    dispatch({
      type: GETTING_ROLES_SUCCESS,
      payload: sortedData
    });
  } catch (error) {
    dispatch({
      type: GETTING_ROLES_ERROR,
      payload: error.response
    });
  }
};

export const createRoleAction = (newRole) => async (dispatch) => {
  try {
    const authHeader = `Bearer ${token}`;
    const response = await axios({
      method: 'POST',
      url: `${BACKEND_URL}/api/roles`,
      headers: {
        auth: authHeader
      },
      data: {
        role: newRole.toLowerCase()
      }
    });
    response.status === 201 ? toast.success(i18next.t('roles.created')) : null;
    dispatch({ type: CREATE_ROLE_SUCCESS, payload: response.data.message });
  } catch (error) {
    error.response.status === 400
      ? toast.info(i18next.t('roles.already'))
      : null;
    dispatch({ type: CREATE_ROLE_ERROR, payload: error.response });
  }
};

export const editRoleAction = (input, roleID) => async (dispatch) => {
  try {
    const authHeader = `Bearer ${token}`;
    const response = await axios({
      method: 'PATCH',
      url: `${BACKEND_URL}/api/roles/${roleID}`,
      headers: {
        auth: authHeader
      },
      data: {
        role: input
      }
    });
    dispatch({ type: EDIT_ROLE_SUCCESS, payload: response.data.message });
  } catch (error) {
    error
      ? toast.info(i18next.t('roles.editerror'))
      : null;
    dispatch({ type: EDIT_ROLE_ERROR, payload: error.response });
  }
};

export const deleteRoleAction = (roleID) => async (dispatch) => {
  try {
    const authHeader = `Bearer ${token}`;
    const response = await axios({
      method: 'DELETE',
      url: `${BACKEND_URL}/api/roles/${roleID}`,
      headers: {
        auth: authHeader
      }
    });
    dispatch({ type: DELETE_ROLE_SUCCESS, payload: response.data.message });
  } catch (error) {
    error.response.status === 400 ? toast.info(i18next.t('roles.deleteerror')) : null;
    dispatch({ type: DELETE_ROLE_ERROR, payload: error.response });
  }
};
