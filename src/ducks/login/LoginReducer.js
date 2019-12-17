import {SUBMIT_SIGNUP_SUCCESS, CHECK_LOGGEDIN_SUCCESSED} from './LoginTypes';
import {LOGOUT_SUCCESSED} from '../logout/LogOutTypes';

const INITIAL_STATE = {
  fullName: '',
  email: '',
  password: '',
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SUBMIT_SIGNUP_SUCCESS:
      return {...state, ...action.payload};
    case CHECK_LOGGEDIN_SUCCESSED: {
      return {...action.payload};
    }
    case LOGOUT_SUCCESSED:
      return {...INITIAL_STATE};
    default:
      return state;
  }
};
