import React from 'react';
import ReactDOM from 'react-dom'; // Changed from 'react-dom/client'
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';

// React 17 render method
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);