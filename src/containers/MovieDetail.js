import React, {Component} from 'react';
import {View, Text, ImageBackground, Image} from 'react-native';
import styles from './styles/MovieDetail';
import Icon from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swipe-image';
import LinearGradient from 'react-native-linear-gradient';

class MovieDetail extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const {params} = this.props.navigation.state;
    console.log('check', this.props.navigation.state.params);

    return (
      <LinearGradient
        colors={['#ff6347', '#e83f20', '#360a02']}
        style={styles.linearGradient}>
        <Image
          style={styles.poster}
          source={{
            uri: `https://image.tmdb.org/t/p/original/${params.poster_path}`,
          }}
        />
        <View style={styles.textSection}>
          <Text style={styles.label}>{params.title}</Text>

          <Text style={styles.overview}>{params.overview}</Text>
        </View>
      </LinearGradient>
    );
  }
}

export default MovieDetail;
