import {call, put, select, takeLatest} from 'redux-saga/effects';

import {
  retrieveLatestMovies,
  retrievePopularMovies,
  retrieveSimilarMovies,
  searchMovies,
} from './HomeServices';
import * as types from './HomeTypes';

export function* retrieveLatest() {
  try {
    const latestMovies = yield call(retrieveLatestMovies);
    yield put({
      type: types.RETRIEVE_LATEST_SUCCESS,
      payload: latestMovies,
    });
  } catch (e) {
    console.log(e);
    yield put({type: types.RETRIEVE_LATEST_FAILED, payload: e.message});
  }
}

export function* retrievePopular() {
  try {
    const popularMovies = yield call(retrievePopularMovies);
    yield put({
      type: types.RETRIEVE_POPULAR_SUCCESS,
      payload: popularMovies,
    });
  } catch (e) {
    console.log(e);
    yield put({type: types.RETRIEVE_POPULAR_FAILED, payload: e.message});
  }
}

export function* retrieveSimilar(action) {
  try {
    const similarMovies = yield call(retrieveSimilarMovies, action.payload);
    yield put({
      type: types.RETRIEVE_SIMILAR_SUCCESS,
      payload: similarMovies,
    });
  } catch (e) {
    console.log(e);
    yield put({type: types.RETRIEVE_SIMILAR_FAILED, payload: e.message});
  }
}

export function* retrieveSearch(action) {
  try {
    const searchResult = yield call(searchMovies, action.payload);
    console.log('searchResult', searchResult);
    yield put({
      type: types.RETRIEVE_SEARCH_SUCCESS,
      payload: searchResult,
    });
  } catch (e) {
    console.log(e);
    yield put({type: types.RETRIEVE_SEARCH_FAILED, payload: e.message});
  }
}
export default function* watchHomeSaga() {
  yield takeLatest(types.RETRIEVE_LATEST, retrieveLatest);
  yield takeLatest(types.RETRIEVE_POPULAR, retrievePopular);
  yield takeLatest(types.RETRIEVE_SIMILAR, retrieveSimilar);
  yield takeLatest(types.RETRIEVE_SEARCH, retrieveSearch);
}
