const initialState = {
  loading: false,
  isLoggedIn: false,
  token: null,
  error: null
};
const isLoggedReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return {
        ...state,
        loading: true
      };
    case 'SET_LOGIN':
      return {
        ...state,
        isLoggedIn: true,
        loading: false,
        token: action.payload
      };

    case 'SET_LOGIN_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
export default isLoggedReducer;
