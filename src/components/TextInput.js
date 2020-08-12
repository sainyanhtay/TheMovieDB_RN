import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';

class TextInput extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    let {component, bindValue} = this.props;
    console.log('check', component);
    return (
      <Input
        label={component.componentData.fieldName}
        placeholder={component.componentData.placeholder}
        onChangeText={value => (bindValue = value)}
      />
    );
  }
}

export default TextInput;
