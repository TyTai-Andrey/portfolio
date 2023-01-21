import { RootState } from '@store/index';

export const getBasketReducer = (store: RootState) => store.basket;

export const getBasket = (store: RootState) => getBasketReducer(store).Basket;

export const getBasketData = (store: RootState) => getBasket(store).data;
