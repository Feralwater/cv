import React, { useState } from 'react';
import {
  LinksWrapper, NavBar, NavbarLogo, NavbarFooter,
} from 'components/Navbar/styles';
import NavItem from 'components/Navbar/NavItem';
import { navbarConstants } from 'components/Navbar/constants';

const Index = () => {
  const [path, setPath] = useState('Home');

  return (
    <NavBar>
      <NavbarLogo>Resume</NavbarLogo>
      <nav>
        <LinksWrapper>
          {navbarConstants.map(({ navIcon, navText }) => (
            <NavItem
              key={navText}
              navTo={`#${navText.toLowerCase()}`}
              navIcon={navIcon}
              navText={navText}
              isActive={path === navText}
              setPath={setPath}
            />
          ))}
        </LinksWrapper>
      </nav>
      <NavbarFooter>
        <img src="#" alt="" />
        <div>
          <p>Victoria</p>
          <p>lineviktoriya@gmail.com</p>
        </div>
      </NavbarFooter>
    </NavBar>
  );
};

export default Index;
