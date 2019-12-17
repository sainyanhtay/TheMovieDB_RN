import {LOGOUT_REQUESTED} from './LogOutTypes';

export const logoutRequest = () => {
  return {
    type: LOGOUT_REQUESTED,
  };
};
