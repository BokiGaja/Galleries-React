import * as actionTypes from './authActionTypes'

let initialState = {
  loggedIn: localStorage.getItem('token') !== null,
  token: localStorage.getItem('token') ? localStorage.getItem('token') : null,
  userName: localStorage.getItem('userName'),
  userId: localStorage.getItem('userId')
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        loggedIn: true,
        token: action.token,
        userName: action.first_name,
        userId: action.userId
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        loggedIn: false,
        token: null,
        userName: null,
        userId: null
      };
    default:
      return state
  }
};

export default authReducer;