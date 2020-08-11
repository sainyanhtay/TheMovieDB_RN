import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  movieContainer: {
    backgroundColor: 'gray',
    borderColor: 'tomato',
    borderWidth: 1,
    width: 200,
    marginLeft: 10,
    borderRadius: 30,
    overflow: 'hidden',
    elevation: 10,
  },
  movieTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    backgroundColor: 'rgba(100, 100, 100, 0.7)',
    textAlign: 'center',
  },
  imageStyle: {width: '100%', height: '100%'},
});
