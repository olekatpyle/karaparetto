import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Theme, DropFieldBgs } from '@/types';

const initialState = {
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
  scale: '16',
  auto: 'auto auto auto auto',
  dropFieldBgs: {
    primary: 'e8e8e8',
    secondary: 'e8e8e8',
    bg: 'e8e8e8',
    accent1: 'e8e8e8',
    accent2: 'e8e8e8',
  } as DropFieldBgs,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    applyColor: (
      state,
      action: PayloadAction<{ key: string; color: string }>
    ) => {
      state.theme[action.payload.key] = action.payload.color;
    },
    applyTheme: (state, action: PayloadAction<Theme>) => {
      async () => {
        state.theme.primary = action.payload.primary;
        state.theme.secondary = action.payload.secondary;
        state.theme.bg = action.payload.bg;
        state.theme.accent1 = action.payload.accent1;
        state.theme.accent2 = action.payload.accent2;
      };
    },
    setScale: (state, action: PayloadAction<string>) => {
      state.scale = action.payload;
      if (state.scale === '16') {
        state.auto = 'auto auto auto auto';
      } else if (state.scale === '36') {
        state.auto = 'auto auto auto auto auto auto';
      } else {
        state.auto = 'auto auto auto auto auto auto auto auto';
      }
    },
    setDropFieldBg: (
      state,
      action: PayloadAction<{ key: string; color: string }>
    ) => {
      state.dropFieldBgs[action.payload.key] = action.payload.color;
    },
    resetTheme: (state) => {
      state.dropFieldBgs.primary = state.defaultTheme.default;
      state.dropFieldBgs.secondary = state.defaultTheme.default;
      state.dropFieldBgs.bg = state.defaultTheme.default;
      state.dropFieldBgs.accent1 = state.defaultTheme.default;
      state.dropFieldBgs.accent2 = state.defaultTheme.default;
      state.theme.primary = state.defaultTheme.primary;
      state.theme.secondary = state.defaultTheme.secondary;
      state.theme.bg = state.defaultTheme.bg;
      state.theme.accent1 = state.defaultTheme.accent1;
      state.theme.accent2 = state.defaultTheme.accent2;
    },
  },
});

export const { applyColor, setScale, setDropFieldBg, resetTheme } =
  uiSlice.actions;
export default uiSlice.reducer;
