import * as React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import App from './App';

import './index.scss';
import './media.scss';

import { Provider } from 'react-redux';

import { store, history } from './store';
import { ModalProvider } from '@components/ModalProvider';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <SnackbarProvider maxSnack={3}>
        <ModalProvider>
          <App />
        </ModalProvider>
      </SnackbarProvider>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
