import { PayloadAction } from '@reduxjs/toolkit';
import { State } from './state';
import Cookies from 'js-cookie';

export const reducers = {
  toggleLoading: (state: State, action: PayloadAction<boolean>): State => {
    return { ...state, loading: action.payload };
  },
};
