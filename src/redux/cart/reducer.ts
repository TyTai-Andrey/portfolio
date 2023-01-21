// Core
import { createReducer } from '@reduxjs/toolkit';
import { productsOptions, products } from '../../mocData/data';

// Actions
import { cartActions } from './actions';

// Typings
import { CartItemModel } from './interfaces';

type InitialState = {
  productsOptions: {
    id: number;
    iconAction: boolean;
    iconHit: boolean;
    iconBestPrice: boolean;
    oldPrice: string | null;
  }[];
  products: {
    id: number;
    productPhoto: string;
    title: string;
    description: string;
    price: number;
    showPrice: string;
  }[];
};

const initialState: InitialState = { productsOptions, products };

export const cartReducer = createReducer(initialState, (builder) => {
  builder.addCase(cartActions.changeCartSuccess, (state, action) => {
    state = action.payload;
  });
});
