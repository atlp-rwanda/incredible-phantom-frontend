import axios from 'axios';
import { toast } from 'react-toastify';
import { BACKEND_URL } from '../../helpers/url';
import i18next from 'i18next';
import {
    GET_DRIVERS_FAILED,
    GET_DRIVERS_SUCCESS,
  
    
    ASSIGN_BUSDRIVER_FAILED,
    ASSIGN_BUSDRIVER_SUCCESS,
    
    UNASSIGN_BUSDRIVER_FAILED,
  
    UNASSIGN_BUSDRIVER_SUCCESS,

    GET_BUS_FAILED,
    GET_BUS_SUCCESS,
    
} from '../actionTypes/actionTypes';
import {token} from '../../components/AssignBusToDriver/token';
import { LaptopWindows } from '@material-ui/icons';

export const getDriversAction = () => async(dispatch) => {
    
    
    try {
        const response = await axios
        .get(`${BACKEND_URL}/api/users`,{
        headers: {
            auth: token
          }});


          dispatch({
            type: GET_DRIVERS_SUCCESS,
            payload: response.data.data
        })
    } catch (error) {
        dispatch({
            type: GET_DRIVERS_FAILED,
            payload: error.response.data.message
          });
    }

};


export const assignDrivertoBusAction = (dropDown, driverId) => async(dispatch) => { 
    try{
        const response = await axios({
            method: 'PATCH',
            url: `${BACKEND_URL}/api/users/${driverId}/assignToBus`,
            headers: {
             auth: token
            },
            data: {
             busId: dropDown
            }})
          
            
        response.status === 200 ? toast.success(i18next.t('assignDriver.success')) : null;
        location.reload();
        dispatch({
            type: ASSIGN_BUSDRIVER_SUCCESS,
            payload: response.data.message
        });
        
    } catch (error) {
        error.response.status === 500 ? toast.info(i18next.t('assignDriver.fail')) : null;
        dispatch({
            type: ASSIGN_BUSDRIVER_FAILED,
            payload: error.response
        })
    }
};

export const unAssignDriverToBusAction = (driverId) => async(dispatch) => {
 
    try{
        const response = await axios({
            method: 'PATCH',
            url: `${BACKEND_URL}/api/users/${driverId}/unassignToBus`,
            headers: {
             auth: token
            },
            })
        response.status === 200 ? toast.success(i18next.t('assignDriver.successU')) : null;
        location.reload();
        dispatch({
            type: UNASSIGN_BUSDRIVER_SUCCESS,
            payload: response.data.message
        });
    }
    catch(error){
        error.response.status === 500 ? toast.info(i18next.t('assignDriver.failU')) : null;
        dispatch({
            type: UNASSIGN_BUSDRIVER_FAILED,
            payload: error.response
        })
    }
};

export const getBusAction = () => async(dispatch) => { 
    try {
        const response = await axios
        .get(`${BACKEND_URL}/api/bus`,{
        headers: {
            auth: token
          }});


          dispatch({
            type: GET_BUS_SUCCESS,
            payload: response.data.data
        })
    } catch (error) {
        dispatch({
            type: GET_BUS_FAILED,
            payload: error.response.data.message
          });
    }
}
