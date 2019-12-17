import React, {Component} from 'react';
import {Provider} from 'react-redux';
import AppNavigation from './navigation/AppNavigation';
import configureStore from './store/configureStore';

class App extends Component {
  render() {
    const store = configureStore();

    return (
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    );
  }
}

export default App;
