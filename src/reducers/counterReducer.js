const initialState = {
  nbr: 2,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'COUNTER':
      return { ...state, nbr: action.payload };

    default:
      return state;
  }
};
