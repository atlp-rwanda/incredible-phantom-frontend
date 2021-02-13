import axios from 'axios';
import i18next from 'i18next';
import { toast } from 'react-toastify';
import { BACKEND_TOKEN, BACKEND_URL} from '../../helpers/url';
import {
  UPDATE_PROFILE,
  UPDATE_SUCCESS,
  UPDATE_FAILED
} from '../actionTypes/profileType';

const loggedInUser = localStorage.getItem('loggedInUser');
const userId = JSON.parse(loggedInUser).id

export const updateProfileAction = (firstName, lastName, phone) => async (
  dispatch
) => {
  dispatch({ type: UPDATE_PROFILE });
  try {
    const res = await axios.patch(
      `${BACKEND_URL}/api/users/update/${userId}`,
      {
        firstName,
        lastName,
        phone
      },
      { headers: { auth: BACKEND_TOKEN } }
    );
    console.log(res)
    if (res.success === true) {
      dispatch({ type: UPDATE_SUCCESS, payload: res.data.data });
      toast.success(i18next.t(`UPDATE_SUCCESS ${response.message}`));
    }
  } catch (error) {
    if (error) {
      toast.error(i18next.t(`UPDATE_FAILED ${error?.response?.data?.message}`));
    }
    dispatch({ type: UPDATE_FAILED });
  }
};