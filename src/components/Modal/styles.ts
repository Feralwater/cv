import styled from 'styled-components';

interface IModal {
  isOpen: boolean
}

export const Overlay = styled.div<IModal>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.overlay};
  z-index: 1000;
  // opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  // transition: all .3s ease;
`;

export const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 50px;
  z-index: 1000;
  background-color: ${({ theme }) => theme.colors.modalBackground};
  border: none;
  overflow: initial;
  border-radius: 4px;
  outline: none;
`;

export const CloseButton = styled.button`
  position: absolute;
  background: transparent;
  border: none;
  width: 45px;
  height: 45px;
  z-index: 4;
  right: -50px;
  top: -32px;
  cursor: pointer;
  border-radius: 50%;
  border: ${({ theme }) => theme.borders.whiteBorder};
  display: flex;
  justify-content: center;
  align-items: center;
  
  & svg{
    width: 45px;
    height: 45px;
    filter: invert(1);
  }
`;
