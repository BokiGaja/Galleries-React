import {galleryService} from "../../services/GalleryService"
import * as actionTypes from './galleryActionsTypes'

export const setGalleries = galleries => {
  return {
    type: actionTypes.SET_GALLERIES,
    galleries: galleries
  }
};

export const setSingleGallery = gallery => {
  return {
    type: actionTypes.SET_SINGLE_GALLERY,
    gallery: gallery
  }
};

export const addNewGallery = gallery => {
  return {
    type: actionTypes.ADD_NEW_GALLERY,
    gallery: gallery
  }
};

export const searchGallery = params => {
  return {
    type: actionTypes.SEARCH_GALLERY,
    params: params
  }
};

export const initGalleries = () => {
  return {
    type: actionTypes.INIT_GALLERIES
  }
};

export const fetchUserGalleries = (id) => {
  return dispatch => {
    galleryService.getAll(id)
      .then(res => dispatch(setGalleries(res.data.filter(gallery => gallery.user_id == id))))
      .catch(error => error)
  }
};

export const fetchSingleGallery = (id) => {
  return dispatch => {
    galleryService.getOne(id)
      .then(res => dispatch(setSingleGallery(res.data)))
      .catch(error => error)
  }
};
