import { RootState } from '@store/index';

// import { RootState } from 'src/store';

export const getCartReducer = (store: RootState) => store.carts;

export const getCartProductsOptions = (store: RootState) =>
  getCartReducer(store).productsOptions;
export const getCartProducts = (store: RootState) =>
  getCartReducer(store).products;
