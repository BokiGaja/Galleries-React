import * as actionTypes from './authActions'

let initialState = {
  loggedIn: localStorage.getItem('token') !== null,
  token: localStorage.getItem('token') ? localStorage.getItem('token') : null,
  userName: localStorage.getItem('userName')
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        loggedIn: true,
        token: action.token,
        userName: action.first_name
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        loggedIn: false,
        token: null
      };
    default:
      return state
  }
};

export default authReducer;