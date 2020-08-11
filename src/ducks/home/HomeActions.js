import {RETRIEVE_LATEST, RETRIEVE_POPULAR, RETRIEVE_SIMILAR, RETRIEVE_SEARCH} from './HomeTypes';

export const retrieveLatest = () => {
  return {
    type: RETRIEVE_LATEST,
  };
};

export const retrievePopular = () => {
  return {
    type: RETRIEVE_POPULAR,
  };
};

export const retrieveSimilar = (id) => {
  return {
    type: RETRIEVE_SIMILAR,
    payload:id
  };
};

export const searchMovie = key => {
  return {
    type: RETRIEVE_SEARCH,
    payload: key,
  };
};
