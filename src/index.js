import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom'; // <-- Changed this line
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './components/App';

// <-- Changed the render method for React 16
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);