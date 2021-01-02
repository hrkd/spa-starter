import {
  createSlice,
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import logger from 'redux-logger';

import { initialState } from './state';
import { reducers, extraReducers } from './reducer';

const appModule = createSlice({
  name: 'tasks',
  initialState,
  reducers: reducers,
  extraReducers: extraReducers,
});

// const rootReducer = combineReducers({
//   app: appModule.reducer,
// });

const rootReducer = appModule.reducer;

export const { toggleLoading } = appModule.actions;

export type RootState = ReturnType<typeof rootReducer>;

let middleware = getDefaultMiddleware();

if (process.env.NODE_ENV === 'development') {
  middleware = middleware.concat(logger);
}

const store = configureStore({
  reducer: rootReducer,
  middleware: middleware,
});

type AppDispatch = typeof store.dispatch;

export default store;
