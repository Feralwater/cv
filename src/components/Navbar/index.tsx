import React from 'react';
import {
  LinksWrapper, NavBar, NavbarLogo, NavbarFooter,
} from 'components/Navbar/styles';
import NavItem from 'components/Navbar/NavItem';
import { navbarConstants } from 'components/Navbar/constants';

const Index = () => (
  <NavBar>
    <NavbarLogo>Resume</NavbarLogo>
    <nav>
      <LinksWrapper>
        {navbarConstants.map(({ navTo, navIcon, navText }) => (
          <NavItem
            key={navTo}
            navTo={navTo}
            navIcon={navIcon}
            navText={navText}
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

export default Index;
