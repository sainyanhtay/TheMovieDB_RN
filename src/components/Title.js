import React from 'react';
import {View, Text, ImageBackground, Image} from 'react-native';
import styles from './styles/Movie';

class Title extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      
      <View style={styles.titleContainer}>                 
        <Text style={styles.movieTitle}>
            {this.props.item.original_title}
        </Text>
      </View>
      
    );
  }
}

export default Title;
