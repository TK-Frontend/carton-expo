import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

const initialState = [10, 50, 100, 255, 158, 156, 301, 212, 111, 98, 28, 48];

export const cartonsSlice = createSlice({
  name: 'cartons',
  initialState: {
    completed: 0,
    done: initialState,
    draft: 0,
    completedPallets: initialState.length,
    sumOfCartons: 0,
  },
  reducers: {
    addCartons: (state, action) => {
      state.done.push(action.payload);
    },
  },
});

export const completedPallets = (state: RootState) => state.cartons.completed;

export const { addCartons } = cartonsSlice.actions;

export default cartonsSlice.reducer;
