import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import styles from './styles/Movie';

class Movie extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity
        style={styles.movieContainer}
        onPress={() => this.props.onPressDetail(this.props.item)}>
        <ImageBackground
          source={{
            uri: `https://image.tmdb.org/t/p/original/${
              this.props.item.poster_path
            }`,
          }}
          style={styles.imageStyle}>
          <Text style={styles.movieTitle}>
            {this.props.item.original_title}
          </Text>
        </ImageBackground>
      </TouchableOpacity>
    );
  }
}

export default Movie;
