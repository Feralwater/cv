import { DefaultTheme } from 'styled-components';

export enum Themes {
  light = 'light',
  dark = 'dark',
}

export const baseTheme = {
  colors: {
    blue: '#2775ff',
    green: '#50d1b2',
    darkGreen: '#4cc4a6',
    lightViolet: '#c2a8fa',
    violet: '#7747ca',
    darkViolet: '#6f42bd',
    orange: '#ec8c56',
    darkOrange: '#dc8250',
    white: '#eeeeee',
    black: '#000000',
    mirage: '#1f2128',
    night: '#0f0f12',
    iceberg: '#e8edf2',
    ghost: '#c6cbd9',
    dolphin: '#656575',
    thunder: '#2e2e3a',
    transparent: 'transparent',
    yellow: '#ece663',
    indigo: '#5415f1',
    emerald: '#5eea8d',
    fuchsia: '#dd50d6',
    red: '#e23738',
    darkRed: '#ce2f30',
    sky: '#0bd6f4',
    darkSky: '#0bcbe8',
    pink: '#fb7bb8',
    gunmetal: '#313442',
    darkGunmetal: '#2c2f3a',
  },

  borders: {
    dolphinBorder: '1px solid #656575',
    boldDolphinBorder: '2px solid #656575',
  },

  shadows: {
    dolphinShadow: '0px 1px 5px #656575',
    insetDolphinShadow: 'inset 0 0 0 1px #656575',
  },

  gradients: {
    verticalLight: 'linear-gradient(90deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.7))',
  },

  media: {
    extraLarge: '(max-width: 1140px)',
    large: '(max-width: 960px)',
    medium: '(max-width: 720px)',
    small: '(max-width: 540px)',
  },

  sizes: {
    container: { width: 1200 },
  },
};

export const LightTheme: DefaultTheme = {
  ...baseTheme,

  colors: {
    ...baseTheme.colors,
    pageBackground: `${baseTheme.colors.iceberg}`,
    elementsBackground: `${baseTheme.colors.white}`,
    switcherBackground: `${baseTheme.colors.white}`,
    tableRowHover: `${baseTheme.colors.ghost}`,
    checkboxBackground: `${baseTheme.colors.ghost}`,
    font: `${baseTheme.colors.black}`,
  },
};

export const DarkTheme: DefaultTheme = {
  ...baseTheme,

  colors: {
    ...baseTheme.colors,
    pageBackground: `${baseTheme.colors.night}`,
    elementsBackground: `${baseTheme.colors.mirage}`,
    switcherBackground: `${baseTheme.colors.gunmetal}`,
    tableRowHover: `${baseTheme.colors.thunder}`,
    checkboxBackground: `${baseTheme.colors.thunder}`,
    font: `${baseTheme.colors.white}`,
  },
};

export const theme = {
  light: LightTheme,
  dark: DarkTheme,
};
