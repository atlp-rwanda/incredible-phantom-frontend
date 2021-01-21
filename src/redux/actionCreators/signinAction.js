import axios from 'axios';
import { BACKEND_URL } from '../../helpers/url';
export const loggedUser = (data) => async (dispatch) => {
  try {
    dispatch({ type: 'SET_LOADING' });
    const response = await axios.post(`${BACKEND_URL}/api/users/signin`, data);
   
      const loggedIn = JSON.stringify(response.data.data);
      localStorage.setItem('loggedInUser', loggedIn);
      dispatch({ type: 'SET_LOGIN', payload: response.data.data.token });
      localStorage.setItem('authToken', response.data.data.token);
    
  } catch (error) {
    dispatch({
      type: 'SET_LOGIN_ERROR',
      payload: error.response.data.message
    });
  }
};
