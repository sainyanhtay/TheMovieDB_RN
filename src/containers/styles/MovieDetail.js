import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
  label: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 25,
  },
  backgroundView: {
    width: '100%',
    height: '50%',
  },
  backgroundView2: {
    width: '100%',
    height: '20%',    
  },
  backgroundView3: {
    width: '100%',
    height: '30%',    
  },
  poster: {
    width: '100%',
    height: '100%',
    // borderBottomRightRadius: 30,
    // borderBottomLeftRadius: 30,
    // marginBottom: 10,
    flex: 1,
    resizeMode: 'cover',
  },
  poster2: {
    width: '50%',
    height: '70%',
    
  },
  overview: {
    paddingTop: 10,
    color: 'white',
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  linearGradient: {
    flex: 1,
  },
  textSection: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  movieTitle: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign:'center',    
  },
  movieOverview: {
    marginTop: 10,
    fontSize: 15,
    color: 'white',
    marginLeft: 10,
    marginRight: 10  
  },
  voteTitle: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    textAlign:'center',    
  },
});