import styled from 'styled-components';

interface IRing {
  isMouseDown: boolean;
}

export const Ring = styled.div<IRing>`
  position: fixed;
  top: 0;
  left: 0;
  width: ${({ isMouseDown }) => (isMouseDown ? '70px' : '45px')};
  height: ${({ isMouseDown }) => (isMouseDown ? '70px' : '45px')};
  background-color: ${({ theme }) => theme.colors.aluminium};
  opacity: 0.3;
  border-radius: 100%;
  transform: translate(-50%, -50%);
  will-change: transform;
  z-index: 999;
  pointer-events: none;
  transition: all .5s ease 0s;
`;

export const Dot = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 8px;
  height: 8px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 100%;
  transform: translate(-50%, -50%);
  z-index: 999;
  pointer-events: none;
`;
