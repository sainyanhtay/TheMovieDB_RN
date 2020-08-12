import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Data from '../../assets/data/data.json';
import TextInput from '../components/TextInput';
import Button from '../components/Button';

const Components = {
  TextInput,
  Button,
};

class StudentForm extends Component {
  static navigationOptions = {
    title: 'StudentForm',
    tabBarIcon: ({focused, tintColor}) => (
      <View>
        <Icon name="ios-notifications" color={tintColor} size={25} />
      </View>
    ),
  };

  dynamicRender = block => {
    if (typeof Components[block.component] !== 'undefined') {
      return React.createElement(Components[block.component], {
        key: block._uid,
        block: block,
      });
    }
    return (
      <Text>The component {block.component} has not been created yet.</Text>
    );
  };

  render() {
    return (
      <View>
        <Text> StudentForm </Text>
        {Data.content.body.map(block => this.dynamicRender(block))}
      </View>
    );
  }
}

export default StudentForm;
