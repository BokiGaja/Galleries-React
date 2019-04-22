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
    case actionTypes.SEARCH_GALLERY:
      return {
        ...state,
        galleries: action.params.length > 0 ? state.originalGalleries.filter(gallery => gallery.title.includes(action.params) ||
          gallery.user.first_name.includes(action.params) || gallery.user.last_name.includes(action.params) || gallery.description.includes(action.params) )
          : state.originalGalleries
      };
    default:
      return state;
  }
};

export default selectedReducer;