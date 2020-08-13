import React from 'react';
import {ButtonGroup} from 'react-native-elements';

class ButtonsGroup extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    let {componentData} = this.props;
    return (
      <ButtonGroup
        onPress={value => {
          this.props.bindValue(value);
        }}
        selectedIndex={this.props.state[componentData.fieldValue]}
        buttons={componentData.buttons}
      />
    );
  }
}

export default ButtonsGroup;
