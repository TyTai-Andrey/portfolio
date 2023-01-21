import * as React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';

import App from './App';

import './index.css';
import './media.css';

import { Provider } from 'react-redux';

import { store, history } from './store';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
