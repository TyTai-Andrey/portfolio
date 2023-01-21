// Core
import { configureStore } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';

// Bus
import { rootReducer, rootSaga } from '../redux';

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer(history),
  middleware: [routerMiddleware(history), sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
