import * as actionTypes from './galleryActionsTypes'

let initialState = {
  galleries: [],
  authorsGalleries: [],
  originalGalleries: [],
  originalAuthorsGalleries: []
};

const selectedReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_GALLERIES:
      return {
        ...state,
        galleries: action.galleries
      }
    default:
      return state;
  }
};

export default selectedReducer;