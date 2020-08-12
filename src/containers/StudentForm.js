import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Data from '../../assets/data/data.json';
import TextInput from '../components/TextInput';
import Buttons from '../components/Buttons';

const Components = {
  TextInput,
  Buttons,
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

  dynamicRender = component => {
    if (typeof Components[component.componentType] !== 'undefined') {
      return React.createElement(Components[component.componentType], {
        key: component._uid,
        component,
        bindValue: '',
      });
    }
    return (
      <Text>
        The component {component.componentType} has not been created yet.
      </Text>
    );
  };

  render() {
    return (
      <View>
        <Text> {Data.form.formName} </Text>
        {Data.form.body.map(component => this.dynamicRender(component))}
      </View>
    );
  }
}

export default StudentForm;
