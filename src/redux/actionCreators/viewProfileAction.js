import axios from 'axios';
import { BACKEND_TOKEN, BACKEND_URL} from '../../helpers/url';
import {
  VIEW_PROFILE,
  VIEW_SUCCESS,
  VIEW_FAIL
} from '../actionTypes/profileType';

const userId = JSON.parse(localStorage.getItem('loggedInUser'));
console.log(userId)
export const viewProfileAction = () => async (dispatch) => {
  
  try {
    dispatch({ type: VIEW_PROFILE });
    const res = await axios.get(`${BACKEND_URL}/api/users/${userId.id}`, {
      headers: {
        auth: BACKEND_TOKEN
      }
    });
    dispatch({ type: VIEW_SUCCESS, payload: res.data });
  } catch (error) {
    console.log(error.response);
    dispatch({ type: VIEW_FAIL, payload: error?.response?.message });
  }
};

