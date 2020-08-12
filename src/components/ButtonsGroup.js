import React from 'react';
import {ButtonGroup} from 'react-native-elements';

class ButtonsGroup extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
    };
  }
  updateIndex = selectedIndex => {
    this.setState({selectedIndex});
  };
  render() {
    let {component} = this.props;
    return (
      <ButtonGroup
        onPress={value => {
          this.setState({selectedIndex: value});
          this.props.bindValue(value);
        }}
        selectedIndex={this.state.selectedIndex}
        buttons={component.componentData.buttons}
      />
    );
  }
}

export default ButtonsGroup;
