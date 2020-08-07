import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'gray',
    paddingHorizontal: 20,
    paddingVertical: 50,
  },
  signUp: {
    fontWeight: 'bold',
    fontSize: 25,
    paddingBottom: 20,
  },
  label: {
    paddingVertical: 10,
    fontSize: 15,
  },
  warnInput: {
    height: 40,
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 10,
  },
  textInput: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
  },
  confirmPw: {
    marginBottom: 30,
  },
  signUpButton: {
    paddingVertical: 10,
    backgroundColor: 'gray',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#000',
  },
  submitText: {
    color: '#000',
    fontSize: 15,
    textAlign: 'center',
  },
  login: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    paddingVertical: 10,
  },
  linearGradient: {
    flex: 1,
  },
});
