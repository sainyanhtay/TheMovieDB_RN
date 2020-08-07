import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from './styles/Movie';

class Movie extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.movieContainer}>
        <ImageBackground
          source={{
            uri:
              'https://image.tmdb.org/t/p/original/' +
              this.props.item.poster_path,
          }}
          style={styles.imageStyle}>
          <Text style={styles.movieTitle}>
            {this.props.item.original_title}
          </Text>
        </ImageBackground>
      </View>
    );
  }
}

export default Movie;
