import React, {Component} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import { Container, Header, Content, Form, Picker, ListItem, Radio, Right, Left } from 'native-base'; 
import Icon from 'react-native-vector-icons/Ionicons';

class Notification extends Component {
  static navigationOptions = {
    title: 'Notification',
    tabBarIcon: ({focused, tintColor}) => (
      <View>
        <Icon name="ios-notifications" color={tintColor} size={25} />
      </View>
    ),
  };
  constructor(props) {
    super(props);
    this.state = {
      selected: "key1"
    };
  }
  onValueChange(value) {
    this.setState({
      selected: value
    });
  }
  render() {
    return (
      <Container>
        <Text> Notification </Text>
        <Content>
          <ListItem selected={false} >
            <Left>
              <Text>Lunch Break</Text>
            </Left>
            <Right>
              <Radio
                selected={false}
              />
            </Right>
          </ListItem>
          <ListItem selected={true}>
            <Left>
              <Text>Discussion with Client</Text>
            </Left>
            <Right>
              <Radio               
                selected={true}
              />
            </Right>
          </ListItem>

          
            <Picker
              note
              mode="dropdown"
              style={{ width: 120 }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Wallet" value="key0" />
              <Picker.Item label="ATM Card" value="key1" />
              <Picker.Item label="Debit Card" value="key2" />
              <Picker.Item label="Credit Card" value="key3" />
              <Picker.Item label="Net Banking" value="key4" />
            </Picker>
        </Content>
      </Container>
    );
  }
}

export default Notification;
