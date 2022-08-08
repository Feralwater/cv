import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useGlobalTheme } from 'hooks/useGlobalTheme';
import { theme } from 'theme';
import Navbar from 'components/Navbar';
import Home from './Pages/Home';
import Cursor from './components/Cursor/Cursor';
import About from './Pages/About/About';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher';

function App() {
  const { globalTheme, handleChangeTheme } = useGlobalTheme();
  return (
    <ThemeProvider theme={theme[globalTheme]}>
      <ThemeSwitcher handleChange={handleChangeTheme} />
      <Navbar />
      <Home />
      <About />
      <Cursor />
      <ScrollToTop />
    </ThemeProvider>
  );
}

export default App;
