import {AsyncStorage} from 'react-native';

export async function storeUserData(userData) {
  AsyncStorage.setItem('User', JSON.stringify(userData));
}

export async function getUserData() {
  let user_info = await AsyncStorage.getItem('User');

  return JSON.parse(user_info);
}
