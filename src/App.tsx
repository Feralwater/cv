import React from 'react';
import Navbar from "./navBar/Navbar";
import Home from "./home/Home";
import Cursor from "./cursor/Cursor";
import About from "./about/About";
import ScrollToTop from "./scrollToTop/ScrollToTop";
import {useGlobalTheme} from './hooks/useGlobalTheme';
import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher';
import {theme} from './styles/theme';
import {ThemeProvider} from 'styled-components';

function App() {
  const { globalTheme, handleChangeTheme } = useGlobalTheme();
    return (
      <ThemeProvider theme={theme[globalTheme]}>
        <ThemeSwitcher handleChange={handleChangeTheme} />
            <Navbar/>
            <Home/>
            <About/>
            <Cursor/>
            <ScrollToTop/>
      </ThemeProvider>
    );
}

export default App;
