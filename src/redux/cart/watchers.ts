// Core
import { all, call, takeLatest } from 'redux-saga/effects';

// Types
import { cartTypes } from './types';

// Workers
import { fetchProducts, fetchProductsOptions } from './workers';

function* watchFetchProducts() {
  yield takeLatest(cartTypes.FETCH_PRODUCTS_ASYNC, fetchProducts);
}
function* watchFetchProductsOptions() {
  yield takeLatest(
    cartTypes.FETCH_PRODUCTS_OPTIONS_ASYNC,
    fetchProductsOptions,
  );
}

export function* watchCart() {
  yield all([call(watchFetchProducts), call(watchFetchProductsOptions)]);
}
