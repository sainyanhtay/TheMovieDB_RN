import React, {Component} from 'react';
import {View, Text, TextInput, Button, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import {searchMovie} from '../ducks/home/HomeActions';
import Movie from '../components/Movie';

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
  }

  retrieveMovie = search => {
    this.props.searchMovie(search);
  };
  //KeyExtractor
  _keyExtractor = (item, index) => String(index);

  _renderMovie({item}, index) {
    return <Movie key={item.id} item={item} index={index} />;
  }

  render() {
    return (
      <View>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            borderRadius: 10,
          }}
          onChangeText={value => this.retrieveMovie(value)}
        />
        <FlatList
          horizontal
          renderItem={({item, index}) => this._renderMovie({item}, index)}
          data={this.props.searchResult.results}
          keyExtractor={this._keyExtractor}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  const {searchResult} = state.home;
  return {searchResult};
};

Search = connect(mapStateToProps, {searchMovie})(Search);

export default Search;
