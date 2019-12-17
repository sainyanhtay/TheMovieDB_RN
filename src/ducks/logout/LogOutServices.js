import {AsyncStorage} from 'react-native';

export function clearUserData() {
  console.log('service');
  AsyncStorage.removeItem('User');
}
