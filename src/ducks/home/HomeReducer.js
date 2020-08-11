import {
  RETRIEVE_LATEST,
  RETRIEVE_LATEST_SUCCESS,
  RETRIEVE_LATEST_FAILED,
  RETRIEVE_POPULAR_SUCCESS,
  RETRIEVE_SIMILAR_SUCCESS,
  RETRIEVE_SEARCH_SUCCESS,
} from './HomeTypes';

const INITIAL_STATE = {
  isLoading: false,
  latestMovies: {},
  popularMovies: {},
  similarMovies: {},
  searchResult: {},
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RETRIEVE_LATEST:
      return {...state, isLoading: true};
    case RETRIEVE_LATEST_SUCCESS:
      return {...state, latestMovies: action.payload, isLoading: false};
    case RETRIEVE_LATEST_FAILED:
      return {...state, isLoading: false};
    case RETRIEVE_POPULAR_SUCCESS: {
      return {...state, popularMovies: action.payload};
    }
    case RETRIEVE_SIMILAR_SUCCESS: {
      return {...state, similarMovies: action.payload};
    }
    case RETRIEVE_SEARCH_SUCCESS: {
      return {...state, searchResult: action.payload};
    }

    default:
      return state;
  }
};
