import React, {Component} from 'react';
import {View, Text, FlatList, TouchableHighlight} from 'react-native';
import { Avatar } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons';
import Data from '../../assets/data/data.json';
import TextInput from '../components/TextInput';
import Buttons from '../components/Buttons';
import styles from './styles/Search';
const Components = {
  TextInput,
  Buttons,
};

class StudentList extends Component {
  static navigationOptions = {
    title: 'StudentList',
    tabBarIcon: ({focused, tintColor}) => (
      <View>
        <Icon name="list" color={tintColor} size={25} />
      </View>
    ),
  };

  constructor(props) {
    super(props);
    this.state = {
      student: {
        name: '',
      },
    };
  }

  renderItem = (data) =>  
  // Fees CardView Design             
          <TouchableHighlight style={{borderBottomColor:'#F2F2F2', borderBottomWidth: 1}} onPress={() => {}}                
          underlayColor={'#c3c3c3'}>
          <View style={{ flex: 1,marginVertical:10, marginHorizontal:20, flexDirection: 'row',borderColor:'',}} backgroundColor=''>    
              <View style={{width:60, backgroundColor:'', marginBottom: 10, }}>
                  {
                    <Avatar 
                    rounded
                    size="medium"
                    source={require('../../assets/placeholder.png')} />                     

                  }
              </View>
              
              <View style={{ width:200, alignItems:'flex-start', margin:10, backgroundColor:''}}> 
                  <Text>
                    {/* {console.log("data",data.item.componentData.placeholder)} */}
                    {data.item.componentData.placeholder}
                  </Text>
              </View>          
          </View>                   
          </TouchableHighlight>

  render() {
    return (
      <View>
        <View style={styles.title}>
          <Text style={styles.titletext}>Hello</Text>
        </View>  
        <FlatList
          data={Data.form.body}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          renderItem={item => this.renderItem(item)}
          keyExtractor={item => item._uid}
        />         
      </View>
    );
  }
}

export default StudentList;
