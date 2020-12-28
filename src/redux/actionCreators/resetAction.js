import axios from 'axios';
import i18next from 'i18next';
import { toast } from 'react-toastify';
import { BACKEND_URL } from '../../helpers/url';

import {
  FORGOT_FAILED,
  FORGOT_PENDING,
  FORGOT_SUCCESS,
  RESET_FAILED,
  RESET_PENDING,
  RESET_SUCCESS,
} from '../actionTypes/actionTypes';

export const forgotAction = (email) => async (dispatch) => {
  dispatch({ type: FORGOT_PENDING });
  try {
    const res = await axios.post(`${BACKEND_URL}/api/users/forgot`, {
      email,
    });

    if (res.data.success === true) {
      toast.success(i18next.t('forgot.success'));
      dispatch({ type: FORGOT_SUCCESS, payload: res.data.success });
    } else {
      toast.error(res.message);
      dispatch({ type: FORGOT_FAILED, payload: res.message });
    }
  } catch (error) {
    error.response
      ? toast.error(i18next.t('forgot.fail'))
      : toast.error(i18next.t('forgot.error'));

    dispatch({ type: FORGOT_FAILED, payload: error.response.message });
  }
};

export const resetAction = (password, token) => async (dispatch) => {
  if (!token) toast.error(i18next.t('reset.fail'));
  dispatch({ type: RESET_PENDING });

  try {
    const res = await axios.patch(`${BACKEND_URL}/api/users/reset/${token}`, {
      password,
    });
    if (res.data.success === true) {
      toast.success(i18next.t('reset.success'));
      dispatch({ type: RESET_SUCCESS, payload: res.data.success });
    } else {
      toast.error(res.message);
      dispatch({ type: RESET_FAILED, payload: res.message });
    }
  } catch (error) {
    error.response
      ? toast.error(i18next.t('reset.fail'))
      : toast.error(i18next.t('reset.error'));

    dispatch({ type: RESET_FAILED, payload: error.response.message });
  }
};
