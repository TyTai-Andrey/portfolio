// Core
import { FilterResult } from '@api/interfaces';
import ProductsApi from '@api/ProductsApi';
import { call, put } from 'redux-saga/effects';

// Actions
import { cartActions } from './actions';
import { ProductsModel, ProductsOptionsModel } from './interfaces';

export function* fetchProducts() {
  yield put(cartActions.fetchProductsRequest());

  const response: FilterResult<ProductsModel> = yield call(
    ProductsApi.getProductsList,
  );

  if (response) {
    yield put(cartActions.fetchProductsSuccess(response));
  } else {
    yield put(cartActions.fetchProductsFailure());
  }
}

export function* fetchProductsOptions() {
  yield put(cartActions.fetchProductsOptionsRequest());

  const response: FilterResult<ProductsOptionsModel> = yield call(
    ProductsApi.getProductsOptionsList,
  );

  if (response) {
    yield put(cartActions.fetchProductsOptionsSuccess(response));
  } else {
    yield put(cartActions.fetchProductsOptionsFailure());
  }
}
