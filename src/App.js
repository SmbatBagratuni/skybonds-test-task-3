import React from 'react';
import MainChart from './components';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import apiMiddleWare from './redux/apiMiddleWare';
import mainReducer from './redux/reducers';

const store = createStore(
  mainReducer,
  applyMiddleware(
    apiMiddleWare
  )
);

const App = () => (
  <Provider store={store}>
    <MainChart />
  </Provider>
);

export default App;
