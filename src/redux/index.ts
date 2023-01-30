// Core
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';
import { all, call } from 'redux-saga/effects';
import { History } from 'history';

// Reducers
import { cartReducer } from './cart/reducer';
import { basketReducer } from './basket/reducer';
import { accountReducer } from './account/reducer';

// Watchers
import { watchCart } from './cart/watchers';
import { watchBasket } from './basket/watchers';
import { watchAccount } from './account/watchers';

export const rootReducer = (history: History) =>
  combineReducers({
    basket: basketReducer,
    carts: cartReducer,
    account: accountReducer,
    form: formReducer,
    router: connectRouter(history),
  });

export function* rootSaga() {
  yield all([call(watchCart), call(watchBasket), call(watchAccount)]);
}
