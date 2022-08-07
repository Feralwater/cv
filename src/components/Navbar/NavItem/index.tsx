import React from 'react';
import { Anchor, LinkContainer } from 'components/Navbar/NavItem/styles';

interface INavItem {
  navTo: string;
  navIcon: React.ReactNode;
  navText: string;
  isActive: boolean;
  setPath: (path: string) => void;
}

const NavItem = ({
  navTo, navIcon, navText, isActive, setPath,
}:INavItem) => {
  const handleClick = () => setPath(navText);

  return (
    <LinkContainer>
      <Anchor href={navTo} isActive={isActive} onClick={handleClick}>
        {navIcon}
        {navText}
      </Anchor>
    </LinkContainer>
  );
};

export default NavItem;
