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
    granite: '#7e7e7e',
    stormDust: '#666666',
    aluminium: '#a9afc3',
    ebony: '#111319',
    monsoon: '#888888',
    davyGrey: '#555555',
    overlay: 'rgba(0, 0, 0, 0.85)',
    cinder: '#12161f',
    midnight: '#0f172a',
    red: '#ff0000',
    gainsboro: '#dddddd',
    boulder: '#777777',
    dune: '#333333',
    amour: '#eeeeee',
    gravel: '#444444',
    onyx: '#111111',
  },

  borders: {
    rhinoBorder: '1px solid #34495e',
    gainsboroBorder: '1px solid #dddddd',
    ironBorder: '1px solid #cbd3d9',
    graniteBorder: '2px solid #7e7e7e',
    thinGraniteBorder: '1px solid #7e7e7e',
    davyGreyBorder: '1px solid #555555',
    whiteBorder: '3px solid #ffffff',
    mapBorder: '5px solid #ffffff',
  },

  shadows: {
    rightShadow: '0 3px 5px rgb(0 0 0 / 10%)',
    headerShadow: '0 8px 24px rgb(149 157 165 / 20%)',
  },

  media: {
    extraLarge: '1199px',
    large: '960px',
    medium: '720px',
    small: '540px',
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
    greeting: `${baseTheme.colors.stormDust}`,
    paragraph: `${baseTheme.colors.granite}`,
    buttonHoverColor: `${baseTheme.colors.white}`,
    socialLinks: `${baseTheme.colors.monsoon}`,
    modalBackground: `${baseTheme.colors.white}`,
    popupItem: `${baseTheme.colors.rhino}`,
    time: `${baseTheme.colors.dune}`,
    timeBackground: `${baseTheme.colors.amour}`,
    symbol: `${baseTheme.colors.gravel}`,
    modalTitle: `${baseTheme.colors.midnight}`,
    header: `${baseTheme.colors.white}`,
  },
  borders: {
    ...baseTheme.borders,
    navbarBorder: `${baseTheme.borders.ironBorder}`,
    progressBorder: `${baseTheme.borders.graniteBorder}`,
    listBorder: `${baseTheme.borders.gainsboroBorder}`,
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
    greeting: `${baseTheme.colors.white}`,
    paragraph: `${baseTheme.colors.aluminium}`,
    buttonHoverColor: `${baseTheme.colors.ebony}`,
    socialLinks: `${baseTheme.colors.white}`,
    modalBackground: `${baseTheme.colors.cinder}`,
    popupItem: `${baseTheme.colors.white}`,
    time: `${baseTheme.colors.white}`,
    timeBackground: `${baseTheme.colors.rhino}`,
    symbol: `${baseTheme.colors.amour}`,
    modalTitle: `${baseTheme.colors.white}`,
    header: `${baseTheme.colors.rhino}`,
  },
  borders: {
    ...baseTheme.borders,
    navbarBorder: `${baseTheme.borders.rhinoBorder}`,
    progressBorder: `${baseTheme.borders.davyGreyBorder}`,
    listBorder: `${baseTheme.borders.rhinoBorder}`,
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
