import React from 'react';
import { MobToggle, StyledHeader } from 'components/Header/styles';
import Logo from 'components/Logo';
import Burger from 'components/Burger';

interface IHeader {
  isOpen: boolean;
  hideNavbarToggle: () => void;
}

const Header = ({ isOpen, hideNavbarToggle }:IHeader) => (
  <StyledHeader>
    <Logo />
    <MobToggle onClick={hideNavbarToggle}>
      <Burger isOpen={isOpen} />
    </MobToggle>
  </StyledHeader>
);

export default Header;
