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
import {Container} from 'native-base';
import Swiper from 'react-native-swipe-image';
import {connect} from 'react-redux';
import {retrieveLatest, retrievePopular} from '../ducks/home/HomeActions';
import Movie from '../components/Movie';
import Title from '../components/Title';
import { Header } from 'react-native/Libraries/NewAppScreen';
 import movie_id from '../utils/index'

class Home extends Component {
  static navigationOptions = ({navigation}) => {
    const {state} = navigation;
    return {
      title: 'Home',
      header: props => (
        <View>
          <Text>Home</Text>
        </View>
      ),
      headerStyle: {
        backgroundColor: '#ff0000',
        elevation: 0, //hide navbar line
      },
      headerTintColor: '#ff0000',
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
        onPressDetail={item => this.onPressDetail(item)}   
      />
    );
  }

  onPressDetail = movie => {
    this.props.navigation.navigate({routeName: 'MovieDetail', params: movie});
  };

  render() {
    return (
      <Container style = {{backgroundColor: '#423F3F'}}>
        <View style={{ height: 50, backgroundColor: 'black', alignItems:'center', justifyContent:'center'}}>
          <Text style={{color:'white', fontSize:24}}> IMDB </Text>
        </View>
        <View style={styles.container}>        
          <Text style={styles.label}> Top Rated </Text>
            <FlatList
              horizontal
              renderItem={({item, index}) => this._renderMovie({item}, index)}
              data={this.props.latestMovies.results}
              keyExtractor={this._keyExtractor}
            />
        </View>
        <View style={styles.container}>
          <Text style={styles.label}> Popular Movies </Text>
          {/* {console.log(this.props.popularMovies)} */}
          <FlatList
            horizontal
            renderItem={({item, index}) => this._renderMovie({item}, index)}
            data={this.props.popularMovies.results}
            keyExtractor={this._keyExtractor}
          />
        </View>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  const {latestMovies, popularMovies, isLoading} = state.home;
  return {latestMovies, popularMovies, isLoading};
};

Home = connect(mapStateToProps, {retrieveLatest, retrievePopular})(Home);

export default Home;
