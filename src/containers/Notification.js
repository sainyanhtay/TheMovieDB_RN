import React, {Component} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class Notification extends Component {
  static navigationOptions = {
    title: 'Notification',
    tabBarIcon: ({focused, tintColor}) => (
      <View>
        <Icon name="ios-notifications" color={tintColor} size={25} />
      </View>
    ),
  };
  render() {
    return (
      <View>
        <Text> Notification </Text>
      </View>
    );
  }
}

export default Notification;
