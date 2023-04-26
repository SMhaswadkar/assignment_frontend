import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { userServiceApi } from './services/userServiceApi';

export const store = configureStore({
  reducer: {
    [userServiceApi.reducerPath]: userServiceApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userServiceApi.middleware),
});

setupListeners(store.dispatch);
