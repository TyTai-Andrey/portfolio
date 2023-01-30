// Core
import { all, call, takeLatest } from 'redux-saga/effects';

// Types
import { accountTypes } from './types';

// Workers
import {
  fetchAccount,
} from './workers';

function* watchFetchAccount() {
  yield takeLatest(
    accountTypes.FETCH_ACCOUNT_ASYNC,
    fetchAccount,
  );
}

export function* watchAccount() {
  yield all([
    call(watchFetchAccount),
  ]);
}
