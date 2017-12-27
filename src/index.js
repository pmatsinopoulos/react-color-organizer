import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import './App.css';
import App from './App';
import storeFactory from './storeFactory';

const store = storeFactory();

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
