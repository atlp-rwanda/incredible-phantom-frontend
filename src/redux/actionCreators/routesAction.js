import axios from 'axios';
import { toast } from 'react-toastify';
import i18next from 'i18next';
import { BACKEND_URL } from '../../helpers/url';
import {
  GETTING_ROUTES,
  GETTING_ROUTES_ERROR,
  GETTING_ROUTES_SUCCESS,
  EDIT_ROUTE,
  EDIT_ROUTE_ERROR,
  EDIT_ROUTE_SUCCESS,
  DELETE_ROUTE,
  DELETE_ROUTE_ERROR,
  DELETE_ROUTE_SUCCESS,
  CREATE_ROUTE,
  CREATE_ROUTE_ERROR,
  CREATE_ROUTE_SUCCESS
} from '../actionTypes/actionTypes';

import { token } from '../../components/dashboard/helpers';

export const getRoutesAction = () => async (dispatch) => {
  dispatch({ type: GETTING_ROUTES });
  try {
    const authHeader = `Bearer ${token}`;
    const response = await axios({
      method: 'GET',
      url: `${BACKEND_URL}/api/route`,
      headers: {
        auth: authHeader
      }
    });
    let data = response.data.data.routes;
    let sortedData = data.reverse();
    dispatch({
      type: GETTING_ROUTES_SUCCESS,
      payload: sortedData
    });
  } catch (error) {
    dispatch({
      type: GETTING_ROUTES_ERROR,
      payload: error.response
    });
  }
};

export const createRouteAction = (newROUTE) => async (dispatch) => {
  dispatch({ type: CREATE_ROUTE });
  console.log('Data', newROUTE);
  try {
    const authHeader = `Bearer ${token}`;

    const response = await axios.post(
      `${BACKEND_URL}/api/route`,

      newROUTE,
      {
        headers: {
          auth: authHeader
        }
      }
    );
    dispatch({ type: CREATE_ROUTE_SUCCESS, payload: response.data.message });
  } catch (error) {
    console.log(error);
    error.response.status === 400 ? toast.info(i18next.t('')) : null;
    dispatch({ type: CREATE_ROUTE_ERROR, payload: error.response });
  }
};

export const editRouteAction = (input, routeID) => async (dispatch) => {
  dispatch({ type: EDIT_ROUTE });
  try {
    const authHeader = `Bearer ${token}`;
    const response = await axios({
      method: 'PATCH',
      url: `${BACKEND_URL}/api/route/${routeID}`,
      headers: {
        auth: authHeader
      },
      data: {
        ...input
      }
    });
    dispatch({ type: EDIT_ROUTE_SUCCESS, payload: response.data.message });
  } catch (error) {
    error.response.status === 400 ? toast.info(error.response.message) : null;
    dispatch({ type: EDIT_ROUTE_ERROR, payload: error.response });
  }
};

export const deleteRouteAction = (routeID) => async (dispatch) => {
  dispatch({ type: DELETE_ROUTE });
  try {
    const authHeader = `Bearer ${token}`;
    const response = await axios({
      method: 'DELETE',
      url: `${BACKEND_URL}/api/route/${routeID}`,
      headers: {
        auth: authHeader
      }
    });
    dispatch({ type: DELETE_ROUTE_SUCCESS, payload: response.data.message });
  } catch (error) {
    error.response ? toast.info(error.response.message) : null;
    dispatch({ type: DELETE_ROUTE_ERROR, payload: error.response });
  }
};
