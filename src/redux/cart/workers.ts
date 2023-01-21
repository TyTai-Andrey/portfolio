// Core
import { put } from 'redux-saga/effects';

// Actions
import { cartActions } from './actions';

export function* changeCart(action: any) {
  localStorage.setItem('products', JSON.stringify(action.payload, null, 3));

  yield put(cartActions.changeCartSuccess(action.payload));
}
