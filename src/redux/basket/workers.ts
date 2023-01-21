// Core
import { PayloadAction } from '@reduxjs/toolkit';
import { put, call, select } from 'redux-saga/effects';

// Actions
import { basketActions } from './actions';
import { BasketItemModel } from './interfaces';
import { map, findIndex, filter } from 'lodash';
// Api
// import BasketApi from '@api/BasketApi';
import { getBasketData } from './selectors';

export function* addProductBasket(
  action: PayloadAction<{
    id: number;
    price: number;
    productPhoto: string;
    title: string;
  }>,
) {
  const state: BasketItemModel[] = yield select(getBasketData);
  const { id } = action.payload;

  const idx = findIndex(state, (i) => i.id === id);

  if (~idx) {
    const newState = map({ ...state }, (i) =>
      i.id === id ? { ...i, count: i.count + 1 } : i,
    );

    yield put(basketActions.changeBasketState(newState));
    return;
  }
  yield put(
    basketActions.changeBasketState([
      ...state,
      { ...action.payload, count: 1 },
    ]),
  );
}
export function* reduceProductBasket(action: PayloadAction<number>) {
  const state: BasketItemModel[] = yield select(getBasketData);
  const id = action.payload;

  const newState = map(state, (i) =>
    i.id === id ? { ...i, count: i.count - 1 } : i,
  );
  yield put(basketActions.changeBasketState(newState));
}
export function* removeProductBasket(action: PayloadAction<number>) {
  const state: BasketItemModel[] = yield select(getBasketData);
  const id = action.payload;

  const newState = filter(state, (i) => i.id !== id);
  yield put(basketActions.changeBasketState(newState));
}
