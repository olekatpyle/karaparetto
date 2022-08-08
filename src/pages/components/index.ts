export { default as Navbar } from './Navbar';
export { default as Dropbar } from './Dropbar';
export { default as Color } from './Color';
export { default as UIContext } from './UIContext';

export type Theme = {
  primary: string;
  secondary: string;
  bg: string;
  accent1: string;
  accent2: string;
  // supposed to be a hardcoded color, to fallback to the default in 'onClickRemoveColor'
  default: string;
};

export const defaultTheme: Theme = {
  primary: '222222',
  secondary: 'e8e8e8',
  bg: 'ffffff',
  accent1: 'f75fff',
  accent2: '009966',
  default: 'e8e8e8',
};
