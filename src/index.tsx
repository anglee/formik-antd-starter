import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import LogRocket from 'logrocket';
import App from './components/App/App';
import store from './store';
import './index.css';

LogRocket.init('iclfld/test');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
