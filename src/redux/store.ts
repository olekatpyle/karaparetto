import { configureStore } from '@reduxjs/toolkit';
import { themeSlice } from './reducer/themeSlice';

const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
export const selectTheme = (state: RootState) => state.theme.theme;
export const selectDefaultTheme = (state: RootState) =>
  state.theme.defaultTheme;

export default store;
