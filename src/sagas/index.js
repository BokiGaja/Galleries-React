import {initGalleries} from "./gallery";
import {takeEvery} from 'redux-saga/effects'
import * as actionTypes from '../store/Gallery/galleryActionsTypes'

export function* watchGallery() {
  yield takeEvery(actionTypes.INIT_GALLERIES, initGalleries);
}