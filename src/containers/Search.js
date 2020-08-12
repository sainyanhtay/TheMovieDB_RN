import React, {Component} from 'react';
import {View, Text, TextInput, Button, FlatList, TouchableHighlight} from 'react-native';
import { Container, Header, Content, ListItem, Radio, Picker, Right, Left } from 'native-base'; 
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import {searchMovie} from '../ducks/home/HomeActions';
import Movie from '../components/Movie';
import RadioButton from '../components/RadioButton';
import styles from './styles/Search';
class Search extends Component {
  static navigationOptions = {
    title: 'Search',
    tabBarIcon: ({focused, tintColor}) => (
      <View>
        <Icon name="ios-search" color={tintColor} size={25} />
      </View>
    ),
  };

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      fatherName: '',
      postalAddress: '',
      personalAddress: '',
      pinCode: '',
      email: '',
      dob: '',
      mobileNo: '',
      city: "key0",
      course: "key0",
      district: "key0",
      state: "key0",
    };    
  }

  onValueChange_City(value) {
    this.setState({
      city: value
    });
  }

  onValueChange_Course(value) {
    this.setState({
      course: value
    });
  }

  onValueChange_District(value) {
    this.setState({
      district: value
    });
  }

  onValueChange_State(value) {
    this.setState({
      state: value
    });
  }

  onClickReset =  (name, fatherName, postalAddress, personalAddress) => {    
    alert(name+' '+fatherName+' '+postalAddress+' '+personalAddress)
  }

  onClickSubmit =  (name, fatherName, postalAddress, personalAddress) => {    
    alert(name+' '+fatherName+' '+postalAddress+' '+personalAddress)
  }
  

  render() {
    const options = [
      {
        key: 'male',
        text: 'Male',
      },
      {
        key: 'female',
        text: 'Female',
      },      
    ];
    return (
      <Container style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titletext}>
            Student Registration Form
          </Text>
        </View>

        <View style={styles.row} >
          <View style={styles.leftView}>
            <Text >Name</Text>
          </View>
          <View style={styles.rightView}>
            <TextInput style={styles.textInput}
              onChangeText={(name) => this.setState({name})}
            /> 
          </View>          
        </View>

        <View style={styles.row}>
          <View style={styles.leftView}>
            <Text >Father Name</Text>
          </View>
          <View style={styles.rightView}>
            <TextInput style={styles.textInput}
              onChangeText={(fatherName) => this.setState({fatherName})}
            /> 
          </View>          
        </View>

        <View style={styles.row}>
          <View style={styles.leftView}>
            <Text >Postal Address</Text>
          </View>
          <View style={styles.rightView}>
            <TextInput style={styles.textInput}
              onChangeText={(postalAddress) => this.setState({postalAddress})}
            /> 
          </View>          
        </View>

        <View style={styles.row}>
          <View style={styles.leftView}>
            <Text >Personal Address</Text>
          </View>
          <View style={styles.rightView}>
            <TextInput style={styles.textInput}
              onChangeText={(personalAddress) => this.setState({personalAddress})}
            /> 
          </View>          
        </View>     

        <View style={styles.row} >
          <View style={styles.leftView}>
            <Text >Sex</Text>
          </View>
          <View style={styles.radioView}>
            <RadioButton options={options} />
          </View>          
        </View>

        <View style={styles.row}>
          <View style={styles.leftView}>
            <Text >Course</Text>
          </View>
          <View style={styles.rightView}>
            <Picker
              note
              mode="dropdown"
              style={{ width: 150 }}
              selectedValue={this.state.course}
              onValueChange={this.onValueChange_Course.bind(this)}
            >
              <Picker.Item label="Grade 10" value="key0" />
              <Picker.Item label="Grade 9" value="key1" />
            </Picker>
          </View>          
        </View>

        <View style={styles.row}>
          <View style={styles.leftView}>
            <Text >City</Text>
          </View>
          <View style={styles.rightView}>
            <Picker
              note
              mode="dropdown"
              style={{ width: 150 }}
              selectedValue={this.state.city}
              onValueChange={this.onValueChange_City.bind(this)}
            >
              <Picker.Item label="Yangon" value="key0" />
              <Picker.Item label="Mandalay" value="key1" />
            </Picker>
          </View>          
        </View>        

        <View style={styles.row}>
          <View style={styles.leftView}>
            <Text >District</Text>
          </View>
          <View style={styles.rightView}>
            <Picker
              note
              mode="dropdown"
              style={{ width: 150 }}
              selectedValue={this.state.district}
              onValueChange={this.onValueChange_District.bind(this)}
            >
              <Picker.Item label="Yangon" value="key0" />
              <Picker.Item label="Mandalay" value="key1" />
            </Picker>
          </View>          
        </View>     

        <View style={styles.row} >
          <View style={styles.leftView}>
            <Text >State</Text>
          </View>
          <View style={styles.rightView}>
            <Picker
              note
              mode="dropdown"
              style={{ width: 150 }}
              selectedValue={this.state.state}
              onValueChange={this.onValueChange_State.bind(this)}
            >
              <Picker.Item label="Yangon" value="key0" />
              <Picker.Item label="Mandalay" value="key1" />
            </Picker>
          </View>          
        </View>

        <View style={styles.row} >
          <View style={styles.leftView}>
            <Text >PinCode</Text>
          </View>
          <View style={styles.rightView}>
            <TextInput style={styles.textInput}
              onChangeText={(pinCode) => this.setState({pinCode})}
            /> 
          </View>          
        </View>

        <View style={styles.row}>
          <View style={styles.leftView}>
            <Text >Email</Text>
          </View>
          <View style={styles.rightView}>
            <TextInput style={styles.textInput}
              onChangeText={(email) => this.setState({email})}
            /> 
          </View>          
        </View>

        <View style={styles.row}>
          <View style={styles.leftView}>
            <Text >DOB</Text>
          </View>
          <View style={styles.rightView}>
            <TextInput style={styles.textInput}
              onChangeText={(dob) => this.setState({dob})}
            /> 
          </View>          
        </View>

        <View style={styles.row}>
          <View style={styles.leftView}>
            <Text >Mobile No.</Text>
          </View>
          <View style={styles.rightView}>
            <TextInput style={styles.textInput}
              onChangeText={(mobileNo) => this.setState({mobileNo})}
            /> 
          </View>          
        </View>

        <View style={styles.row}>
          <View style={styles.leftView}>
            <TouchableHighlight style={[styles.buttonContainer]}
              onPress={() => 
                [this.onClickReset(this.state.name,this.state.fatherName,this.state.postalAddress,this.state.personalAddress)]}>
                  <Text>Reset</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.rightView}>
            <TouchableHighlight style={[styles.buttonContainer]}
              onPress={() => 
                [this.onClickSubmit(this.state.name,this.state.fatherName,this.state.postalAddress,this.state.personalAddress)]}>
                  <Text>Submit Form</Text>
            </TouchableHighlight>
          </View>
        </View>      

      </Container>
    );
  }
}

const mapStateToProps = state => {
  const {searchResult} = state.home;
  return {searchResult};
};

Search = connect(mapStateToProps, {searchMovie})(Search);

export default Search;
