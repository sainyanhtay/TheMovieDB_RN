import React, {Component} from 'react';
import {View, Text, KeyboardAvoidingView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Data from '../../assets/data/data.json';
import {Components} from '../components';
import styles from './styles/Search';
import {ScrollView} from 'react-native-gesture-handler';
import {retrieveForm} from '../ducks/studentForm/StudentFormActions';
import {connect} from 'react-redux';

let initialState = {
  name: '',
  fatherName: '',
  postalAddress: '',
  address: '',
  gender: 0,
  course: 0,
};
class StudentForm extends Component {
  static navigationOptions = {
    title: 'StudentForm',
    tabBarIcon: ({focused, tintColor}) => (
      <View>
        <Icon name="ios-notifications" color={tintColor} size={25} />
      </View>
    ),
  };

  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };
  }

  componentDidMount() {
    this.props.retrieveForm('5f33c39388dae200243bdded');
  }

  buttonAction = value => {
    console.log('buttonAction', value);
    if (value === 'reset') {
      this.setState({...initialState});

      Data.form.body.map(component =>
        component.componentData.fieldValue
          ? typeof component.componentData.fieldValue === 'number'
            ? 0
            : ''
          : null,
      );
    }
  };

  dynamicRender = component => {
    if (typeof Components[component.componentType] !== 'undefined') {
      return React.createElement(Components[component.componentType], {
        key: component._uid,
        componentData: component.componentData,
        state: this.state,
        bindValue: value => {
          if (component.componentType === 'Buttons') this.buttonAction(value);
          else
            this.setState({
              [component.componentData.fieldValue]: value,
            });
        },
      });
    }
    return (
      <Text>
        The component {component.componentType} has not been created yet.
      </Text>
    );
  };

  render() {
    // console.log('check', this.state);
    return (
      <ScrollView>
        <View style={styles.title}>
          <Text style={styles.titletext}> {Data.form.formName} </Text>
        </View>
        {Data.form.body.map(component => this.dynamicRender(component))}
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  const {form, isLoading} = state.StudentForm;
  return {form, isLoading};
};

StudentForm = connect(
  mapStateToProps,
  {retrieveForm},
)(StudentForm);

export default StudentForm;
