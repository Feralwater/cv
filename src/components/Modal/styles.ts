import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.overlay};
  z-index: 1000;
`;

export const ModalContent = styled.div`
  width: 100%;
  max-height: 70vh;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 50px;
  box-sizing: border-box;

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #7e7e7e;
    border-radius: 6px;
  }

  @media (max-width: ${({ theme }) => theme.media.medium}) {
   padding: 20px;
  }
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  background-color: ${({ theme }) => theme.colors.modalBackground};
  border-radius: 4px;
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

  & svg {
    width: 45px;
    height: 45px;
    filter: invert(1);
  }

  @media (max-width: ${({ theme }) => theme.media.extraLarge}) {
    right: -15px;
    top: -50px;
  }
  
  @media (max-width: ${({ theme }) => theme.media.medium}) {
    display: none;
  }
`;
