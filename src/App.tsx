import React, { useCallback, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { useGlobalTheme } from 'hooks/useGlobalTheme';
import { theme } from 'theme';
import Navbar from 'components/Navbar';
import Contacts from 'Pages/Contacts';
import Portfolio from 'Pages/Portfolio';
import Service from 'Pages/Service';
import Header from 'components/Header';
import Home from './Pages/Home';
import Cursor from './components/Cursor';
import About from './Pages/About';
import ScrollToTop from './components/ScrollToTop';
import ThemeSwitcher from './components/ThemeSwitcher';

function App() {
  const { globalTheme, handleChangeTheme } = useGlobalTheme();
  const [isOpen, setIsOpen] = useState(false);
  const hideNavbarToggle = useCallback(() => {
    setIsOpen((prevState) => !prevState);
  }, [isOpen]);

  return (
    <ThemeProvider theme={theme[globalTheme]}>
      <ThemeSwitcher handleChange={handleChangeTheme} />
      <Header isOpen={isOpen} hideNavbarToggle={hideNavbarToggle} />
      <Navbar isOpen={isOpen} />
      <Home />
      <About />
      <Service />
      <Portfolio />
      <Contacts />
      <Cursor />
      <ScrollToTop />
    </ThemeProvider>
  );
}

export default App;
