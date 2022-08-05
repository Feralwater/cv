import { Anchor, LinkContainer } from 'components/Navbar/styles';
import React from 'react';

interface INavItem {
  navTo: string;
  navIcon: React.ReactNode;
  navText: string;
}

const NavItem = ({ navTo, navIcon, navText }:INavItem) => (
  <LinkContainer>
    <Anchor href={navTo}>
      {navIcon}
      {navText}
    </Anchor>
  </LinkContainer>
);

export default NavItem;
