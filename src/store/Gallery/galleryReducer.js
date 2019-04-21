import * as actionTypes from './galleryActionsTypes'

let initialState = {
  galleries: [],
  originalGalleries: [],
  singleGallery: null
};

const selectedReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_GALLERIES:
      return {
        ...state,
        galleries: action.galleries
      };
    case actionTypes.SET_SINGLE_GALLERY:
      return {
        ...state,
        singleGallery: action.gallery
      }
    default:
      return state;
  }
};

export default selectedReducer;