import API from '../../services/API';
export function retrieveLatestMovies() {
  let url =
    'https://api.themoviedb.org/3/movie/top_rated?api_key=xxxxxx&language=en-US&page=1';
  return API.get(url)
    .then(response => response.data)
    .catch(function(error) {
      throw error;
    });
}

export function retrievePopularMovies() {
  let url =
    'https://api.themoviedb.org/3/movie/popular?api_key=xxxxxx&language=en-US&page=1';
  return API.get(url)
    .then(response => response.data)
    .catch(function(error) {
      throw error;
    });
}

export function searchMovies(key) {
  let url =
    'https://api.themoviedb.org/3/search/movie?api_key=xxxxxx&language=en-US&query=' +
    key.trim() +
    '&page=1&include_adult=false';
  return API.get(url)
    .then(response => response.data)
    .catch(function(error) {
      throw error;
    });
}
