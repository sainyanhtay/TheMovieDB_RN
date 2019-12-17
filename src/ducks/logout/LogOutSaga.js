import {call, put, select, takeLatest} from 'redux-saga/effects';
import {clearUserData} from './LogOutServices';
import * as types from './LogOutTypes';

export function* logout() {
  try {
    yield call(clearUserData);
    yield put({
      type: types.LOGOUT_SUCCESSED,
    });
  } catch (e) {
    console.log(e);
  }
}

export default function* watchLogOutSaga() {
  yield takeLatest(types.LOGOUT_REQUESTED, logout);
}
