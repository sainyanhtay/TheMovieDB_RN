import {createStore, applyMiddleware, compose} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import app from '../reducers';
import root from '../sagas';
import {AsyncStorage} from 'react-native';

const sagaMiddleware = createSagaMiddleware();
let store = null;
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

export default function configureStore() {
  if (!store) {
    const middlewares = [];

    middlewares.push(sagaMiddleware);

    store = createStore(
      persistReducer(persistConfig, app),
      applyMiddleware(...middlewares),
    );

    persistStore(store);
  }

  sagaMiddleware.run(root);

  return store;
}
