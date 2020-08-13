import React from 'react';
import {Input} from 'react-native-elements';

class TextInput extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    let {componentData} = this.props;
    return (
      <Input
        label={componentData.fieldName}
        placeholder={componentData.placeholder}
        value={this.props.state[componentData.fieldValue]}
        onChangeText={value => this.props.bindValue(value)}
      />
    );
  }
}

export default TextInput;
