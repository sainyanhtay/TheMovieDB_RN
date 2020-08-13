import React from 'react';
import {Picker} from 'native-base';
import {View, Text} from 'react-native';
import styles from './styles/DropDown';

class DropDown extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    let {componentData} = this.props;
    let serviceItems = componentData.fieldItems.map((item, index) => {
      return <Picker.Item key={index} value={index} label={item} />;
    });

    return (
      <View style={styles.row}>
        <View style={styles.leftView}>
          <Text>{componentData.fieldName}</Text>
        </View>
        <View style={styles.rightView}>
          <Picker
            note
            mode="dropdown"
            style={{width: 150}}
            selectedValue={this.props.state[componentData.fieldValue]}
            onValueChange={value => {
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
