import {galleryService} from "../../services/GalleryService"
import * as actionTypes from './galleryActionsTypes'

export const setGalleries = galleries => {
  return {
    type: actionTypes.SET_GALLERIES,
    galleries: galleries
  }
};

export const initGalleries = () => {
  return dispatch => {
    galleryService.getAll()
      .then(res => dispatch(setGalleries(res.data)))
      .catch(error => error);
  }
};