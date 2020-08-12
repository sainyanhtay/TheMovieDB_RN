import React from 'react';
import {Input} from 'react-native-elements';

class TextInput extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    let {component} = this.props;
    return (
      <Input
        label={component.componentData.fieldName}
        placeholder={component.componentData.placeholder}
        onChangeText={value => this.props.bindValue(value)}
      />
    );
  }
}

export default TextInput;
