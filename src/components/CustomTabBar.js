import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';

export default class CustomTabBar extends React.Component {
  render() {
    const {state} = this.props.navigation;
    const activeTabIndex = state.index;

    const tabIcons = [
      'ios-home',
      'ios-search',
      'ios-notifications',
      'user-alt',
    ];

    return (
      <View>
        {state.routes.map((element, index) => (
          <TouchableOpacity
            key={element.key}
            onPress={() => Actions[element.key]()}>
            <Icon name={tabIcons[index]} size={25} />
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}
