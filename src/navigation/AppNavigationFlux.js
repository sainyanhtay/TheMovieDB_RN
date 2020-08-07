import Login from '../containers/Login';
import Home from '../containers/Home';
import Notification from '../containers/Notification';
import Profile from '../containers/Profile';
import Search from '../containers/Search';
import React, {Component} from 'react';
import {Router, Scene, Stack, Tabs} from 'react-native-router-flux';

class AppNavigator extends Component {
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene key="login" initial={true} component={Login} hideNavBar />
          <Tabs>
            <Scene key="home" component={Home} hideNavBar />
            <Scene key="search" component={Search} hideNavBar />
            <Scene key="notification" component={Notification} hideNavBar />
            <Scene key="profile" component={Profile} hideNavBar />
          </Tabs>
        </Stack>
      </Router>
    );
  }
}

export default AppNavigator;
