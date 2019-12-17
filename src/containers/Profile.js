import React, {Component} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {connect} from 'react-redux';
import {logoutRequest} from '../ducks/logout/LogOutActions';
import {StackActions, NavigationActions} from 'react-navigation';

class Profile extends Component {
  static navigationOptions = {
    title: 'Profile',
    tabBarIcon: ({focused, tintColor}) => (
      <View>
        <Icon name="user-alt" color={tintColor} size={25} />
      </View>
    ),
  };
  constructor(props) {
    super(props);
  }

  logout = () => {
    this.props.logoutRequest();
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({routeName: 'Login'})],
    });
    this.props.navigation.dispatch(resetAction);
  };
  render() {
    return (
      <View>
        <Text> Profile </Text>
        <View>
          <Text> User Name - </Text>
          <Text>{this.props.fullName}</Text>
        </View>
        <View>
          <Text> Email - </Text>
          <Text>{this.props.email}</Text>
        </View>

        <Button color="#ff0000" title="Log Out" onPress={() => this.logout()} />
      </View>
    );
  }
}

const mapStateToProps = state => {
  const {fullName, email, password} = state.login;
  return {fullName, email, password};
};

Profile = connect(mapStateToProps, {logoutRequest})(Profile);

export default Profile;
