import styled from 'styled-components';

export const BurgerButton = styled.button`
  width: 45px;
  height: 45px;
  position: relative;
  border-radius: 50%;
  padding: 0;
  background-color: ${({ theme }) => theme.colors.font};
  border: none;
  cursor: pointer;
  margin-left: auto;
}
`;

interface BurgerButtonProps {
  isOpen: boolean;
}

export const BurgerInner = styled.div<BurgerButtonProps>`
 & span {
   position: absolute;
   top: 0;
   left: 0;
   bottom: 0;
   right: 0;
   width: 25px;
   height: 2px;
   margin: auto;
   background-color: ${({ theme }) => theme.colors.sidebarBackground};
   transition: all .3s ease;
}
  
  & span:nth-child(1) {
    top: ${({ isOpen }) => (isOpen ? '0' : '-15px')};
    transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : 'rotate(0)')};
  }
  
  & span:nth-child(2) {
    top: 1px;
    display: ${({ isOpen }) => (isOpen ? 'none' : 'block')};
  }
  
  & span:nth-child(3) {
    top: ${({ isOpen }) => (isOpen ? '15px' : 'auto')};
    bottom: 13px;
    transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg)' : 'rotate(0)')};
  }
`;
