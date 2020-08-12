import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex:1,
  },
  title: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:10,
  },
  titletext: {
    fontWeight: 'bold',    
    fontSize: 25,
  },
  row: {
    flexDirection:'row',
    marginLeft:20,
    marginRight:10,
    marginBottom:5,
  },
  leftView: {
    width:'40%', 
    alignItems:'flex-start',
    justifyContent: 'center',
  },
  rightView: {
    width:'60%', 
    alignItems:'flex-start',
  },
  radioView: {
    flexDirection:'row',
    width:'60%', 
    margin: 10,
    alignItems:'flex-start',
  },
  textInput: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
  },
  body: {
    margin: 5,
    flexDirection:'column',
    alignItems:'flex-start',
  },
  body2: {
    margin: 5,
    flexDirection:'column',
    alignItems:'flex-end',
  },
  buttonContainer: {
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 150,
    borderRadius: 30,
    backgroundColor: "#00b5ec",
  },
});
