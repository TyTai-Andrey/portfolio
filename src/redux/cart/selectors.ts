import { RootState } from '@store/index';

// import { RootState } from 'src/store';

export const getCartReducer = (store: RootState) => store.carts;

// export const getCartLoading = (store: RootState) =>
//   getCartReducer(store).loading;
// export const getCartError = (store: RootState) => getCartReducer(store).error;

// export const getCartData = (store: RootState) => getCartReducer(store).data;

// export const getCartResult = (store: RootState) => getCartData(store).result;
// export const getCartTotal = (store: RootState) => getCartData(store).total;
