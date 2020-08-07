import React, {Component} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class Chat extends Component {
  static navigationOptions = {
    title: 'Chat',
    tabBarIcon: ({focused, tintColor}) => (
      <View>
        <Icon name="ios-chatboxes" color={tintColor} size={25} />
      </View>
    ),
  };
  render() {
    return (
      <View>
        <Text> Chat </Text>
      </View>
    );
  }
}

export default Chat;
