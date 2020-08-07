import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  AsyncStorage,
} from 'react-native';
import styles from './styles/Home';
import Icon from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swipe-image';
import {connect} from 'react-redux';
import {retrieveLatest, retrievePopular} from '../ducks/home/HomeActions';
import Movie from '../components/Movie';

class Home extends Component {
  static navigationOptions = ({navigation}) => {
    const {state} = navigation;
    return {
      tabBarIcon: ({focused, tintColor}) => (
        <View>
          <Icon name="ios-home" color={tintColor} size={25} />
        </View>
      ),
    };
  };

  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.props.retrieveLatest();
    this.props.retrievePopular();
  }

  //KeyExtractor
  _keyExtractor = (item, index) => String(index);

  _renderMovie({item}, index) {
    return (
      <Movie
        key={item.id}
        item={item}
        index={index}
        // onPressDetail={index => this.onPressDetail(item)}
      />
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.label}> Latest Movies </Text>
        <FlatList
          horizontal
          renderItem={({item, index}) => this._renderMovie({item}, index)}
          data={this.props.latestMovies.results}
          keyExtractor={this._keyExtractor}
        />
        <Text style={styles.label}> Popular Movies </Text>
        <FlatList
          horizontal
          renderItem={({item, index}) => this._renderMovie({item}, index)}
          data={this.props.popularMovies.results}
          keyExtractor={this._keyExtractor}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  const {latestMovies, popularMovies, isLoading} = state.home;
  return {latestMovies, popularMovies, isLoading};
};

Home = connect(
  mapStateToProps,
  {retrieveLatest, retrievePopular},
)(Home);

export default Home;
