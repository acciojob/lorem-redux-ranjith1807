import React from 'react';
import ReactDOM from 'react-dom'; // Changed import
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';

// React 17 rendering method
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);