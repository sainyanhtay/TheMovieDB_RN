import React from 'react';
import {Picker} from 'native-base';
import {View, Text} from 'react-native';
import styles from './styles/DropDown';

class DropDown extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {selectedIndex: 0};
  }
  updateIndex = selectedIndex => {
    this.setState({selectedIndex});
  };

  render() {
    let {component} = this.props;
    let serviceItems = component.componentData.fieldItems.map((item, index) => {
      return <Picker.Item key={index} value={index} label={item} />;
    });

    return (
      <View style={styles.row}>
        <View style={styles.leftView}>
          <Text>{component.componentData.fieldName}</Text>
        </View>
        <View style={styles.rightView}>
          <Picker
            note
            mode="dropdown"
            style={{width: 150}}
            selectedValue={this.state.selectedIndex}
            onValueChange={value => {
              this.setState({selectedIndex: value});
              this.props.bindValue(value);
            }}>
            {serviceItems}
          </Picker>
        </View>
      </View>
    );
  }
}

export default DropDown;
