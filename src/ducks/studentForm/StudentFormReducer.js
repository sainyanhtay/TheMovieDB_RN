import {
  RETRIEVE_FORM,
  RETRIEVE_FORM_SUCCESS,
  RETRIEVE_FORM_FAILED,
} from './StudentFormTypes';

const INITIAL_STATE = {
  isLoading: false,
  form: {},
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RETRIEVE_FORM:
      return {...state, isLoading: true};
    case RETRIEVE_FORM_SUCCESS:
      return {...state, form: action.payload, isLoading: false};
    case RETRIEVE_FORM_FAILED:
      return {...state, isLoading: false};

    default:
      return state;
  }
};
