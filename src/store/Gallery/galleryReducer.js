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
        galleries: action.galleries,
        originalGalleries: action.galleries
      };
    case actionTypes.SET_SINGLE_GALLERY:
      return {
        ...state,
        singleGallery: action.gallery
      };
    case actionTypes.ADD_NEW_GALLERY:
      return {
        ...state,
        galleries: [...state.galleries, action.gallery],
        originalGalleries: [...state.galleries, action.gallery]
      };
    default:
      return state;
  }
};

export default selectedReducer;