import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './reduxStore';
import Home from '../src/pages/Home';
import './css/master.css';

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>, document.getElementById('root'));
