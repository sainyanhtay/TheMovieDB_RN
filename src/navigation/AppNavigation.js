import Login from '../containers/Login';
import Home from '../containers/Home';
import StudentForm from '../containers/StudentForm';
import Profile from '../containers/Profile';
import MovieDetail from '../containers/MovieDetail';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Search from '../containers/Search';

const AppNavigator = createStackNavigator(
  {
    // StudentForm: {screen: StudentForm},
    Login: {
      screen: Login,
    },
    MovieDetail: {screen: MovieDetail},
    Home: {
      screen: createBottomTabNavigator(
        {
          Home: {screen: Home},
          Search: {screen: Search},
          StudentForm: {screen: StudentForm},
          Profile: {screen: Profile},
        },
        {
          defaultNavigationOptions: ({navigation}) => ({}),
          tabBarOptions: {
            activeTintColor: 'gray',
            inactiveTintColor: 'tomato',
            activeBackgroundColor: 'tomato',
          },
        },
      ),
    },
  },
  {
    headerMode: 'none',
  },
);

export default createAppContainer(AppNavigator);
