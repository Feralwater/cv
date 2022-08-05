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
    white: '#fff',
    black: '#000',
    rangoonGreen: '#1a1a1a',
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

  theme: Themes.light,
  colors: {
    ...baseTheme.colors,
    pageBackground: `${baseTheme.colors.zircon}`,
    themeSwitcherColor: `${baseTheme.colors.black}`,
    sidebarBackground: `${baseTheme.colors.white}`,
    font: `${baseTheme.colors.rangoonGreen}`,
  },
};

export const DarkTheme: DefaultTheme = {
  ...baseTheme,

  theme: Themes.dark,
  colors: {
    ...baseTheme.colors,
    pageBackground: `${baseTheme.colors.mirage}`,
    themeSwitcherColor: `${baseTheme.colors.zircon}`,
    sidebarBackground: `${baseTheme.colors.black}`,
    font: `${baseTheme.colors.white}`,
  },
};

export const theme = {
  light: LightTheme,
  dark: DarkTheme,
};
