import axios from 'axios';
// import i18next from 'i18next';
// import { toast } from 'react-toastify';
import { BACKEND_TOKEN, BACKEND_URL, Id} from '../../helpers/url';
import {
  VIEW_PROFILE,
  VIEW_SUCCESS,
  VIEW_FAIL
} from '../actionTypes/profileType';



export const viewProfileAction = () => async (dispatch) => {
  
  try {
    dispatch({ type: VIEW_PROFILE });
    const res = await axios.get(`${BACKEND_URL}/api/users/${Id}`, {
      headers: {
        auth: BACKEND_TOKEN
      }
    });
    dispatch({ type: VIEW_SUCCESS, payload: res.data });
  } catch (error) {
    console.log(error.response);
    dispatch({ type: VIEW_FAIL, payload: error.response.message });
  }
};

// export default viewProfileAction;
