import { RootState } from '@store/index';

export const getAccountReducer = (store: RootState) => store.account;

export const getAccountData = (store: RootState) =>
  getAccountReducer(store).data;

export const getAccountLoading = (store: RootState) =>
  getAccountReducer(store).loading;
