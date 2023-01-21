// Core
import { createReducer } from '@reduxjs/toolkit';

// Actions
import { basketActions } from './actions';

// Typings
import { BasketItemModel } from './interfaces';

interface InitialState {
  Basket: {
    data: BasketItemModel[];
  };
}

const initialState: InitialState = {
  Basket: {
    data: JSON.parse(localStorage.getItem('productsBasket') || '[]'),
  },
};

export const basketReducer = createReducer(initialState, (builder) => {
  builder.addCase(basketActions.changeBasketState, (state, action) => {
    localStorage.setItem(
      'productsBasket',
      JSON.stringify(action.payload, null, 3),
    );

    state.Basket.data = action.payload;
  });
});
