// Core
import { all, call, takeLatest } from 'redux-saga/effects';

// Types
import { cartTypes } from './types';

// Workers
import { changeCart } from './workers';

function* watchChangeCart() {
  yield takeLatest(cartTypes.CHANGE_STATE_CART, changeCart);
}

export function* watchCart() {
  yield all([call(watchChangeCart)]);
}
