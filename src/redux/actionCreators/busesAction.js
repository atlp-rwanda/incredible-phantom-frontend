import axios from 'axios';
import { toast } from 'react-toastify';
import i18next from 'i18next';
import { BACKEND_URL } from '../../helpers/url';
import {
  GETTING_BUSES,
  GETTING_BUSES_ERROR,
  GETTING_BUSES_SUCCESS,
  EDIT_BUS,
  EDIT_BUS_ERROR,
  EDIT_BUS_SUCCESS,
  DELETE_BUS,
  DELETE_BUS_ERROR,
  DELETE_BUS_SUCCESS,
  CREATE_BUS,
  CREATE_BUS_ERROR,
  CREATE_BUS_SUCCESS
} from '../actionTypes/actionTypes';

import { token } from '../../components/dashboard/buses/helpers';

export const getBusesAction = () => async (dispatch) => {
  dispatch({ type: GETTING_BUSES });
  try {
    const authHeader = `Bearer ${token}`;
    const response = await axios({
      method: 'GET',
      url: `${BACKEND_URL}/api/bus`,
      headers: {
        auth: authHeader
      }
    });
    let data = response.data.data;
    let sortedData = data.reverse();
    dispatch({
      type: GETTING_BUSES_SUCCESS,
      payload: sortedData
    });
  } catch (error) {
    dispatch({
      type: GETTING_BUSES_ERROR,
      payload: error.response
    });
  }
};

export const createBusAction = (newBus) => async (dispatch) => {
  dispatch({ type: CREATE_BUS });
  console.log('Data', newBus);
  try {
    const authHeader = `Bearer ${token}`;

    const response = await axios.post(
      `${BACKEND_URL}/api/bus`,

      newBus,
      {
        headers: {
          auth: authHeader
        }
      }
    );
    response.status === 201 ? toast.success(i18next.t('buses.created')) : null;
    dispatch({ type: CREATE_BUS_SUCCESS, payload: response.data.message });
  } catch (error) {
    console.log(error);
    error.response.status === 400
      ? toast.info(i18next.t('buses.already'))
      : null;
    dispatch({ type: CREATE_BUS_ERROR, payload: error.response });
  }
};

export const editBusAction = (input, busID) => async (dispatch) => {
  dispatch({ type: EDIT_BUS });
  console.log(input);
  try {
    const authHeader = `Bearer ${token}`;
    const response = await axios({
      method: 'PATCH',
      url: `${BACKEND_URL}/api/bus/${busID}`,
      headers: {
        auth: authHeader
      },
      data: {
        ...input
      }
    });
    dispatch({ type: EDIT_BUS_SUCCESS, payload: response.data.message });
  } catch (error) {
    error.response.status === 400 ? toast.info(error.response.message) : null;
    dispatch({ type: EDIT_BUS_ERROR, payload: error.response });
  }
};

export const deleteBusAction = (busID) => async (dispatch) => {
  dispatch({ type: DELETE_BUS });
  try {
    const authHeader = `Bearer ${token}`;
    const response = await axios({
      method: 'DELETE',
      url: `${BACKEND_URL}/api/bus/${busID}`,
      headers: {
        auth: authHeader
      }
    });
    dispatch({ type: DELETE_BUS_SUCCESS, payload: response.data.message });
  } catch (error) {
    error.response ? toast.info(error.response.message) : null;
    dispatch({ type: DELETE_BUS_ERROR, payload: error.response });
  }
};
