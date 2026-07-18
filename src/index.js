import React from 'react';
import ReactDOM from 'react-dom'; // Use 'react-dom/client' if using React 18+
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import './App.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);