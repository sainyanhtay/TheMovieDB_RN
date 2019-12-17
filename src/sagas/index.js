import {fork} from 'redux-saga/effects';
import watchHomeSaga from '../ducks/home/HomeSaga';
import watchLoginSaga from '../ducks/login/LoginSaga';
import watchLogOutSaga from '../ducks/logout/LogOutSaga';

export default function* rootSaga() {
  yield fork(watchHomeSaga);
  yield fork(watchLoginSaga);
  yield fork(watchLogOutSaga);
}
