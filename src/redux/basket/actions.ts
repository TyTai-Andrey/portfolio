// Core
import { createAction } from '@reduxjs/toolkit';
import { BasketItemModel } from './interfaces';

// Types
import { basketTypes } from './types';

export const basketActions = {
  changeBasketState: createAction(
    basketTypes.CHANGE_BASKET_STATE,
    (data: BasketItemModel[]) => ({
      payload: data,
    }),
  ),

  addProduct: createAction(
    basketTypes.ADD_PRODUCT,
    (data: {
      id: number;
      price?: number;
      productPhoto?: string;
      title?: string;
    }) => ({
      payload: {
        ...data,
        price: data.price ?? 0,
        productPhoto: data.productPhoto ?? '',
        title: data.title ?? '',
      },
    }),
  ),
  reduceProduct: createAction(basketTypes.REDUCE_PRODUCT, (data: number) => ({
    payload: data,
  })),
  removeProduct: createAction(basketTypes.REMOVE_PRODUCT, (data: number) => ({
    payload: data,
  })),
};
