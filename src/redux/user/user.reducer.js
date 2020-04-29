const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state, action) => {
  if (state === undefined) {
    return { ...INITIAL_STATE };
  }

  switch (action.type) {
    case 'SET_CURRENT_USER': {
      return {
        ...state,
        currentUser: action.payload,
      };
    }
    default:
      return state;
  }
};

export default userReducer;
