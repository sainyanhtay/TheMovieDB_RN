import React from 'react';
import {View, Text, ImageBackground, Image, TouchableOpacity} from 'react-native';
import styles from './styles/Movie';
import Title from '../components/Title';
class Movie extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity onPress={()=>this.props.onPressDetail(this.props.item)}>
      <View style={styles.movieContainer}>
        <View>
          <ImageBackground
            source={{
              uri:
                'https://image.tmdb.org/t/p/original/' +
                this.props.item.poster_path,
            }}
            style={{width: '100%', height: '100%'}}>                 
          </ImageBackground>
          
        </View>        
      </View>     
      
      <Title
        key={this.props.item.id}
        item={this.props.item}
        index={this.props.index}
        // onPressDetail={index => this.onPressDetail(item)}
      />
      </TouchableOpacity>
      
    );
  }
}

export default Movie;
