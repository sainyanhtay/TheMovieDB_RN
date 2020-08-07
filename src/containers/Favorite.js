import React, {Component} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';

class Favorite extends Component {
  static navigationOptions = {
    title: 'Favorite',
    tabBarIcon: ({focused, tintColor}) => (
      <View>
        <Icon name="favorite" color={tintColor} size={25} />
      </View>
    ),
  };
  render() {
    return (
      <View>
        <Text> Favorite </Text>
      </View>
    );
  }
}

export default Favorite;
