import React, { ReactNode, MouseEvent } from 'react';
import { StyledButton } from 'components/Button/styles';

interface IButton {
  children: ReactNode;
  onClick: (e: MouseEvent<HTMLElement>) => void;
  type: 'button' | 'submit';
}

const Button = ({ children, onClick, type }:IButton) => (
  <StyledButton type={type} onClick={onClick}>
    {children}
  </StyledButton>
);

export default Button;
