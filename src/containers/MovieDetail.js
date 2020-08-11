import React, {Component} from 'react';
import {View, Text, ImageBackground, Image, FlatList} from 'react-native';
import styles from './styles/MovieDetail';
import Icon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swipe-image';
import LinearGradient from 'react-native-linear-gradient';
import {Container} from 'native-base';
import {connect} from 'react-redux';
import {retrieveSimilar} from '../ducks/home/HomeActions';
import Movie from '../components/Movie';
import movie_id from '../utils/index';

class MovieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: props.navigation.state.params,
    };
  }

  componentDidMount() {
    this.props.retrieveSimilar(this.state.movie.id);
  }

  //KeyExtractor
  _keyExtractor = (item, index) => String(index);

  _renderMovie({item}, index) {
    return (
      <Movie
        key={item.id}
        item={item}
        index={index}
        onPressDetail={item => this.updateDetail(item)}
      />
    );
  }

  updateDetail = movie => {
    this.props.retrieveSimilar(movie.id);
    this.setState({movie});
  };

  render() {
    return (
      <Container style={{backgroundColor: '#423F3F'}}>
        <View style={styles.backgroundView}>
          <ImageBackground
            style={styles.poster}
            source={{
              uri: `https://image.tmdb.org/t/p/original/${
                this.state.movie.poster_path
              }`,
            }}
            blurRadius={15}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
              }}>
              <Image
                style={styles.poster2}
                source={{
                  uri: `https://image.tmdb.org/t/p/original/${
                    this.state.movie.poster_path
                  }`,
                }}
              />
              <Text style={styles.voteTitle}>
                <Icon name="star" color="yellow" />
                {this.state.movie.vote_average}
                {'          '}
                {this.state.movie.release_date}
              </Text>
              <Text style={styles.movieTitle}>
                {this.state.movie.original_title}
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.backgroundView2}>
          <Text style={styles.movieOverview}>{this.state.movie.overview}</Text>
        </View>
        <View style={styles.backgroundView3}>
          <Text style={styles.label}> Similar Movies </Text>
          <FlatList
            horizontal
            renderItem={({item, index}) => this._renderMovie({item}, index)}
            data={this.props.similarMovies.results}
            keyExtractor={this._keyExtractor}
          />
        </View>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  const {similarMovies} = state.home;
  return {similarMovies};
};

MovieDetail = connect(
  mapStateToProps,
  {retrieveSimilar},
)(MovieDetail);

export default MovieDetail;
