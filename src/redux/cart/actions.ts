// Core
import { createAction } from '@reduxjs/toolkit';

// Types
import { cartTypes } from './types';

export const cartActions = {
  // Sync
  changeStateCart: createAction(cartTypes.CHANGE_STATE_CART, (data) => ({
    payload: data,
  })),

  changeCartSuccess: createAction(cartTypes.CHANGE_CART_SUCCESS, (data) => ({
    payload: data,
  })),
};
