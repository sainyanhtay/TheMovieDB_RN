import API from '../../services/API';
import {COMMON} from '../../common/index';

export function retrieveFormService(key) {
  let url = `${COMMON.api}form/${key}`;
  return API.get(url)
    .then(response => response.data)
    .catch(function(error) {
      throw error;
    });
}
