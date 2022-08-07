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
    iron: '#cbd3d9',
    horizon: '#527ca6',
    rhino: '#34495e',
    rockBlue: 'rgba(169, 175, 195, 0.3)',
    fantasy: '#f5f5f5',
  },

  borders: {
    rhinoBorder: '1px solid #34495e',
    ironBorder: '1px solid #cbd3d9',
  },

  shadows: {
    rightShadow: '0 3px 5px rgb(0 0 0 / 10%)',
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
    firstLetter: `${baseTheme.colors.rhino}`,
    activeAnchor: `${baseTheme.colors.fantasy}`,
  },
  borders: {
    ...baseTheme.borders,
    navbarBorder: `${baseTheme.borders.ironBorder}`,
  },
  shadows: {
    ...baseTheme.shadows,
    navbarShadow: `${baseTheme.shadows.rightShadow}`,
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
    firstLetter: `${baseTheme.colors.horizon}`,
    activeAnchor: `${baseTheme.colors.mirage}`,
  },
  borders: {
    ...baseTheme.borders,
    navbarBorder: `${baseTheme.borders.rhinoBorder}`,
  },
  shadows: {
    ...baseTheme.shadows,
    navbarShadow: 'none',
  },
};

export const theme = {
  light: LightTheme,
  dark: DarkTheme,
};
