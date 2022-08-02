import React from 'react';
import Navbar from "./navBar/Navbar";
import Home from "./Pages/Home/Home";
import Cursor from "./components/Cursor/Cursor";
import About from "./Pages/About/About";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
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
