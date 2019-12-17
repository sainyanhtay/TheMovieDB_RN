import {call, put, select, takeLatest} from 'redux-saga/effects';
import {NavigationActions, StackActions} from 'react-navigation';
import {storeUserData, getUserData} from './LoginServices';
import * as types from './LoginTypes';

export function* submitSignUp(action) {
  try {
    yield call(storeUserData, action.payload);
    yield put({
      type: types.SUBMIT_SIGNUP_SUCCESS,
      payload: action.payload,
    });
  } catch (e) {
    console.log(e);
    yield put({type: types.SUBMIT_SIGNUP_FAILED, payload: e.message});
  }
}

export function* checkLoggedIn() {
  try {
    const userData = yield call(getUserData);
    yield put({
      type: types.CHECK_LOGGEDIN_SUCCESSED,
      payload: userData,
    });
    console.log('saga', userData);
    if (userData != null) {
      yield put(
        StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({routeName: 'Home'})],
        }),
      );
    }
  } catch (e) {
    console.log(e);
  }
}

export default function* watchHomeSaga() {
  yield takeLatest(types.SUBMIT_SIGNUP_REQUESTED, submitSignUp);
  yield takeLatest(types.CHECK_LOGGEDIN_REQUESTED, checkLoggedIn);
}
