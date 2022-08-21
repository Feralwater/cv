import React from 'react';
import { BurgerButton, BurgerInner } from 'components/Burger/styled';

interface IBurger {
  isOpen: boolean;
}

const Burger = ({ isOpen }: IBurger) => (
  <BurgerButton>
    <BurgerInner isOpen={isOpen}>
      <span />
      <span />
      <span />
    </BurgerInner>
  </BurgerButton>
);

export default Burger;
