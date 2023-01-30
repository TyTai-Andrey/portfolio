import * as React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';

import App from './App';

import './index.scss';
import './media.scss';

import { Provider } from 'react-redux';

import { store, history } from './store';
import { ModalProvider } from '@components/ModalProvider';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <ModalProvider>
        <App />
      </ModalProvider>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
