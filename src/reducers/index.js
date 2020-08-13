import {combineReducers} from 'redux';
import HomeReducer from '../ducks/home/HomeReducer';
import LoginReducer from '../ducks/login/LoginReducer';
import StudentFormReducer from '../ducks/studentForm/StudentFormReducer';

export default combineReducers({
  home: HomeReducer,
  login: LoginReducer,
  StudentForm: StudentFormReducer,
});
