import { PayloadAction } from '@reduxjs/toolkit';
import { State } from './state';
import { login } from './asyncActions';
import Cookies from 'js-cookie';

export const reducers = {
  toggleLoading: (state: State, action: PayloadAction<boolean>): State => {
    return { ...state, loading: action.payload };
  },
};

export const extraReducers = {
  [login.fulfilled.toString()]: (state: State, action: PayloadAction<any>) => {
    return {
      ...state,
    };
  },
};
