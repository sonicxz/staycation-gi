import userActionTypes from "./userTypes";

export const USER_INITIAL_STATE = {
  currentUser: null,
};

export const userReducer = (state = USER_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case userActionTypes.SET_CURRENT_USER:
      return { ...state, currentUser: payload };

    default:
      return state;
  }
};
