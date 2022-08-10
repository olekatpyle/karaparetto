import { configureStore } from '@reduxjs/toolkit';
import { uiSlice } from './reducer/uiSlice';

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
export const selectTheme = (state: RootState) => state.ui.theme;
export const selectDefaultTheme = (state: RootState) => state.ui.defaultTheme;
export const selectScale = (state: RootState) => state.ui.scale;
export const selectAuto = (state: RootState) => state.ui.auto;
export const selectDropFieldBgs = (state: RootState) => state.ui.dropFieldBgs;

export default store;
