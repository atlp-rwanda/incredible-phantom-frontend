import axios from 'axios';
import i18next from 'i18next';
import { toast } from 'react-toastify';
import { BACKEND_TOKEN, BACKEND_URL } from '../../helpers/url';
import {
  UPDATE_PROFILE,
  UPDATE_SUCCESS,
  UPDATE_FAILED
} from '../actionTypes/profileType';

const userId = JSON.parse(localStorage.getItem('loggedInUser'));

export const updateProfileAction = (firstName, lastName, phone) => async (
  dispatch
) => {
  dispatch({ type: UPDATE_PROFILE });
  try {
    const res = await axios.patch(
      `${BACKEND_URL}/api/users/update/${userId.id}`,
      {
        firstName,
        lastName,
        phone
      },
      { headers: { auth: BACKEND_TOKEN } }
    );
    dispatch({ type: UPDATE_SUCCESS, payload: res.data.data });
  } catch (error) {
    dispatch({ type: UPDATE_FAILED });
    toast.error(i18next.t(`UPDATE_FAILED ${error?.response?.data?.message}`));
  }
};
