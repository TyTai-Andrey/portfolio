// Core
import { createAction } from '@reduxjs/toolkit';
import { AccountModel, AccountParams } from './interfaces';

// Types
import { accountTypes } from './types';

export const accountActions = {
  // Sync
  fetchAccountRequest: createAction(accountTypes.FETCH_ACCOUNT_REQUEST),

  fetchAccountSuccess: createAction(
    accountTypes.FETCH_ACCOUNT_SUCCESS,
    (data: AccountModel) => ({ payload: data }),
  ),

  fetchAccountFailure: createAction(accountTypes.FETCH_ACCOUNT_FAILURE),
  logoutAccount: createAction(accountTypes.LOGOUT_ACCOUNT),

  // Async
  fetchAccountAsync: createAction(
    accountTypes.FETCH_ACCOUNT_ASYNC,
    (params: AccountParams) => ({ payload: params }),
  ),
};
