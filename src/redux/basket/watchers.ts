// Core
import { all, call, takeLatest } from 'redux-saga/effects';

// Types
import { basketTypes } from './types';

// Workers
import {
  addProductBasket,
  reduceProductBasket,
  removeProductBasket,
} from './workers';

function* watchAddProductBasket() {
  yield takeLatest(basketTypes.ADD_PRODUCT, addProductBasket);
}
function* watchReduceProductBasket() {
  yield takeLatest(basketTypes.REDUCE_PRODUCT, reduceProductBasket);
}
function* watchRemoveProductBasket() {
  yield takeLatest(basketTypes.REMOVE_PRODUCT, removeProductBasket);
}

export function* watchBasket() {
  yield all([
    call(watchAddProductBasket),
    call(watchReduceProductBasket),
    call(watchRemoveProductBasket),
  ]);
}
