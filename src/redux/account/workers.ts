// Core
import AccountApi from '@api/AccountApi';
import { PayloadAction } from '@reduxjs/toolkit';
import { call, put } from 'redux-saga/effects';

// Actions
import { accountActions } from './actions';
import { AccountModel, AccountParams } from './interfaces';

export function* fetchAccount(action: PayloadAction<AccountParams>) {
  yield put(accountActions.fetchAccountRequest());

  const params = action.payload;
  const response: AccountModel = yield call(AccountApi.getAccount, params);

  if (response) {
    yield put(accountActions.fetchAccountSuccess(response));
  } else {
    yield put(accountActions.fetchAccountFailure());
  }
}
