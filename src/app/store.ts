import { configureStore } from '@reduxjs/toolkit';
import cartonsReducer from '../features/cartonsSlice';

export const store = configureStore({
  reducer: {
    cartons: cartonsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
