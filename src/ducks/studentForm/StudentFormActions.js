import {RETRIEVE_FORM} from './StudentFormTypes';

export const retrieveForm = formKey => {
  return {
    type: RETRIEVE_FORM,
    payload: formKey,
  };
};
