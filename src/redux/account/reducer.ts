// Core
import { createReducer } from '@reduxjs/toolkit';

// Actions
import { accountActions } from './actions';

interface InitialState {
  data: {
    login: string;
    token: string;
  } | null;
  loading: boolean;
  error: boolean;
}

const initialState: InitialState = {
  data: null,
  loading: false,
  error: false,
};

export const accountReducer = createReducer(initialState, (builder) => {
  builder.addCase(accountActions.logoutAccount, (state) => {
    state.data = null;
    state.loading = false;
    state.error = false;
  });
  builder.addCase(accountActions.fetchAccountRequest, (state) => {
    state.data = null;
    state.loading = true;
    state.error = false;
  });

  builder.addCase(accountActions.fetchAccountSuccess, (state, action) => {
    state.data = action.payload.data;
    state.loading = false;
    state.error = false;
  });

  builder.addCase(accountActions.fetchAccountFailure, (state) => {
    state.data = null;
    state.loading = false;
    state.error = true;
  });
});
