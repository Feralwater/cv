import { DefaultTheme } from 'styled-components';

export enum Themes {
  light = 'light',
  dark = 'dark',
}

export const baseTheme = {
  colors: {
    zircon: '#f5f8fc',
    mirage: '#191c26',
    transparent: 'transparent',
  },

  media: {
    extraLarge: '(max-width: 1140px)',
    large: '(max-width: 960px)',
    medium: '(max-width: 720px)',
    small: '(max-width: 540px)',
  },
};

export const LightTheme: DefaultTheme = {
  ...baseTheme,

  colors: {
    ...baseTheme.colors,
    pageBackground: `${baseTheme.colors.zircon}`,
  },
};

export const DarkTheme: DefaultTheme = {
  ...baseTheme,

  colors: {
    ...baseTheme.colors,
    pageBackground: `${baseTheme.colors.mirage}`,
  },
};

export const theme = {
  light: LightTheme,
  dark: DarkTheme,
};
