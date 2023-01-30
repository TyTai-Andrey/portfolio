// Core
import { FilterResult } from '@api/interfaces';
import { createReducer } from '@reduxjs/toolkit';

// Actions
import { cartActions } from './actions';

// Typings
import { ProductsOptionsModel, ProductsModel } from './interfaces';

type InitialState = {
  productsOptions: {
    data: FilterResult<ProductsOptionsModel> | null;
    loading: boolean;
    error: boolean;
  };
  products: {
    data: FilterResult<ProductsModel> | null;
    loading: boolean;
    error: boolean;
  };
};

const initialState: InitialState = {
  productsOptions: {
    data: null,
    loading: false,
    error: false,
  },
  products: {
    data: null,
    loading: false,
    error: false,
  },
};

export const cartReducer = createReducer(initialState, (builder) => {
  builder.addCase(cartActions.fetchProductsRequest, (state) => {
    state.products.data = null;
    state.products.loading = true;
    state.products.error = false;
  });
  builder.addCase(cartActions.fetchProductsSuccess, (state, action) => {
    state.products.data = action.payload;
    state.products.loading = false;
    state.products.error = false;
  });
  builder.addCase(cartActions.fetchProductsFailure, (state) => {
    state.products.data = null;
    state.products.loading = false;
    state.products.error = true;
  });

  builder.addCase(cartActions.fetchProductsOptionsRequest, (state) => {
    state.productsOptions.data = null;
    state.productsOptions.loading = true;
    state.productsOptions.error = false;
  });
  builder.addCase(cartActions.fetchProductsOptionsSuccess, (state, action) => {
    state.productsOptions.data = action.payload;
    state.productsOptions.loading = false;
    state.productsOptions.error = false;
  });
  builder.addCase(cartActions.fetchProductsOptionsFailure, (state) => {
    state.productsOptions.data = null;
    state.productsOptions.loading = false;
    state.productsOptions.error = true;
  });
});
