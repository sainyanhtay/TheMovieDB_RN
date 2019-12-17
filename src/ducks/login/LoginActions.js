import {SUBMIT_SIGNUP_REQUESTED, CHECK_LOGGEDIN_REQUESTED} from './LoginTypes';

export const submitSignUp = signUpData => {
  return {
    type: SUBMIT_SIGNUP_REQUESTED,
    payload: signUpData,
  };
};

export const checkLoggedIn = () => {
  return {
    type: CHECK_LOGGEDIN_REQUESTED,
  };
};
