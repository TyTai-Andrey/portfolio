// Core
import { FilterResult } from '@api/interfaces';
import { createAction } from '@reduxjs/toolkit';
import { ProductsModel, ProductsOptionsModel } from './interfaces';

// Types
import { cartTypes } from './types';

export const cartActions = {
  // Sync
  fetchProductsRequest: createAction(cartTypes.FETCH_PRODUCTS_REQUEST),
  fetchProductsSuccess: createAction(
    cartTypes.FETCH_PRODUCTS_SUCCESS,
    (data: FilterResult<ProductsModel>) => ({ payload: data }),
  ),
  fetchProductsFailure: createAction(cartTypes.FETCH_PRODUCTS_FAILURE),

  fetchProductsOptionsRequest: createAction(
    cartTypes.FETCH_PRODUCTS_OPTIONS_REQUEST,
  ),
  fetchProductsOptionsSuccess: createAction(
    cartTypes.FETCH_PRODUCTS_OPTIONS_SUCCESS,
    (data: FilterResult<ProductsOptionsModel>) => ({ payload: data }),
  ),
  fetchProductsOptionsFailure: createAction(
    cartTypes.FETCH_PRODUCTS_OPTIONS_FAILURE,
  ),

  // Async
  fetchProductsAsync: createAction(cartTypes.FETCH_PRODUCTS_ASYNC),
  fetchProductOptionssAsync: createAction(
    cartTypes.FETCH_PRODUCTS_OPTIONS_ASYNC,
  ),
};
