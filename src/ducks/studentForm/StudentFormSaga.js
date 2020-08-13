import {call, put, select, takeLatest} from 'redux-saga/effects';

import {retrieveFormService} from './StudentFormServices';
import * as types from './StudentFormTypes';

export function* retrieveForm(action) {
  try {
    const response = yield call(retrieveFormService, action.payload);
    console.log('response', response);
    yield put({
      type: types.RETRIEVE_FORM_SUCCESS,
      payload: response,
    });
  } catch (e) {
    console.log(e);
    yield put({
      type: types.RETRIEVE_FORM_FAILED,
      payload: e.message,
    });
  }
}
export default function* watchStudentFormSaga() {
  yield takeLatest(types.RETRIEVE_FORM, retrieveForm);
}
