const initialState = {
    loading: false,
    data: {},
    error: ''
};
export const assignReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DRIVER_LOADING':
      return {
          ...state,
          loading: true
      };
    case 'FETCHED_DRIVERS':
        return {
            ...state,
            loading: false,
            data: action.payload
        } 
    case 'ERROR_FETCH_DRIVER':
        return {
            ...state,
            loading: false,
            error: action.payload
        } 
    default:
      return state;
  }
};