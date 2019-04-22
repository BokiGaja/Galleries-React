import {galleryService} from "../services/GalleryService";
import {setGalleries} from "../store/Gallery/galleryActions";
import {put} from 'redux-saga/effects';

export function* initGalleries() {
  try {
    const response = yield galleryService.getAll()
    yield put(setGalleries(response.data))
  } catch(error) {
    return (error => error);
  }
}
