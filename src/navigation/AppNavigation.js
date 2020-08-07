import Login from '../containers/Login';
import Home from '../containers/Home';
import Notification from '../containers/Notification';
import Profile from '../containers/Profile';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Search from '../containers/Search';

const AppNavigator = createStackNavigator(
  {
    Login: {
      screen: Login,
    },
    Home: {
      screen: createBottomTabNavigator(
        {
          Home: {screen: Home},
          Search: {screen: Search},
          Notification: {screen: Notification},
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
