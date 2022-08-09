import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Theme } from '@/types';

const initialState = {
  // fallback theme
  defaultTheme: {
    primary: '222222',
    secondary: 'e8e8e8',
    bg: 'ffffff',
    accent1: 'f75fff',
    accent2: '009966',
    default: 'e8e8e8',
  } as Theme,
  theme: {
    primary: '222222',
    secondary: 'e8e8e8',
    bg: 'ffffff',
    accent1: 'f75fff',
    accent2: '009966',
    default: 'e8e8e8',
  } as Theme,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    applyColor: (
      state,
      action: PayloadAction<{ key: string; color: string }>
    ) => {
      state.theme[action.payload.key] = action.payload.color;
    },
    removeColor: (state, action: PayloadAction<string>) => {
      state.theme[action.payload] = state.defaultTheme[action.payload];
    },
  },
});

export const { applyColor, removeColor } = themeSlice.actions;
export default themeSlice.reducer;
