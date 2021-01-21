import axios from 'axios';
export const assignedDriverAction = (data) => (dispatch) => {
    dispatch({type: 'FETCH_DRIVER_LOADING'});
    axios
    .get('https://incredible-phantom.herokuapp.com/api/users',{
    headers: {
        'auth': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTA3LCJlbWFpbCI6Im9wZXJhdG9yQHRlc3QudGVzdCIsImlhdCI6MTYxMTIzODg0M30.miYD1pfWEY1vMre3fcn7932WsHZXa7eDwphflyzfMtg'
      }})
    .then((response)=>{ 
        console.log(response.data);
        dispatch({
            type: 'FETCHED_DRIVERS',
            payload: response.data
        })
    })
    .catch((error)=>{
        dispatch({
            type: 'ERROR_FETCH_DRIVER',
            payload: error.response.data.message
          });
    })
};