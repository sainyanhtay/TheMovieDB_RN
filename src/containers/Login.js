import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  KeyboardAvoidingView,
} from 'react-native';
import styles from './styles/Login';
import {submitSignUp, checkLoggedIn} from '../ducks/login/LoginActions';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signUpData: {
        fullName: '',
        email: '',
        password: '',
        confirmedPassword: '',
      },
      validatefullName: false,
      validateEmail: false,
      validatepassword: false,
      validateconfirmedPassword: false,
    };
  }

  async componentDidMount() {
    await this.props.checkLoggedIn();
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if (
      this.props.email == '' &&
      nextProps.email != '' &&
      nextProps.email != undefined
    ) {
      // logged in situation
      // Actions.reset('Home');
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({routeName: 'Home'})],
      });
      this.props.navigation.dispatch(resetAction);
    }
    return false;
  }

  resetValidation() {
    this.setState({
      validatefullName: false,
      validateEmail: false,
      validatepassword: false,
      validateconfirmedPassword: false,
    });
  }

  submit = () => {
    //reset validation
    this.resetValidation();
    let validateSuccess = true;
    const {
      fullName,
      email,
      password,
      confirmedPassword,
    } = this.state.signUpData;

    //check validation
    if (fullName.trim() == '') {
      this.setState({
        validatefullName: true,
      });
      validateSuccess = false;
    }

    if (email.trim() == '' || !this.validateEmail(email)) {
      this.setState({
        validateEmail: true,
      });
      validateSuccess = false;
    }

    if (password.length < 6) {
      this.setState({
        validatepassword: true,
      });
      validateSuccess = false;
    }

    if (confirmedPassword != password) {
      this.setState({
        validateconfirmedPassword: true,
      });
      validateSuccess = false;
    }

    console.log('validate this.state', this.state);

    if (validateSuccess) {
      this.props.submitSignUp(this.state.signUpData);
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({routeName: 'Home'})],
      });
      this.props.navigation.dispatch(resetAction);
    }
  };

  validateEmail = email => {
    const expression = new RegExp(
      '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$',
    );

    return expression.test(email.toLowerCase());
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <Text style={styles.signUp}> Sign Up </Text>
        <Text style={styles.label}> Fullname </Text>
        <TextInput
          style={
            this.state.validatefullName ? styles.warnInput : styles.textInput
          }
          underlineColorAndroid={this.state.validatefullName ? 'red' : 'gray'}
          onChangeText={value => {
            this.state.signUpData.fullName = value;
          }}
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={this.state.validateEmail ? styles.warnInput : styles.textInput}
          underlineColorAndroid={this.state.validateEmail ? 'red' : 'gray'}
          onChangeText={value => {
            this.state.signUpData.email = value;
          }}
        />

        <Text style={styles.label}> Password </Text>
        <TextInput
          secureTextEntry={true}
          style={
            this.state.validatepassword ? styles.warnInput : styles.textInput
          }
          underlineColorAndroid={this.state.validatepassword ? 'red' : 'gray'}
          onChangeText={value => {
            this.state.signUpData.password = value;
          }}
        />

        <Text style={styles.label}> Confirm Password </Text>
        <TextInput
          secureTextEntry={true}
          style={[
            styles.confirmPw,
            this.state.validateconfirmedPassword
              ? styles.warnInput
              : styles.textInput,
          ]}
          underlineColorAndroid={
            this.state.validateconfirmedPassword ? 'red' : 'gray'
          }
          onChangeText={value => {
            this.state.signUpData.confirmedPassword = value;
          }}
        />

        <Button
          style={styles.signUpButton}
          color="#ff0000"
          title="Sign Up"
          onPress={() => this.submit()}
        />

        <Text style={styles.login}>
          Already have an account?{' '}
          <Text
            style={{color: 'blue'}}
            onPress={() => {
              // Actions.home();
              this.props.navigation.navigate({routeName: 'Home'});
            }}>
            Login
          </Text>
        </Text>
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = state => {
  const {fullName, email, password} = state.login;
  return {fullName, email, password};
};

Login = connect(
  mapStateToProps,
  {submitSignUp, checkLoggedIn},
)(Login);

export default Login;
