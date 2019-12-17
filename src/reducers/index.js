import {combineReducers} from 'redux';
import HomeReducer from '../ducks/home/HomeReducer';
import LoginReducer from '../ducks/login/LoginReducer';

export default combineReducers({
  home: HomeReducer,
  login: LoginReducer,
});
