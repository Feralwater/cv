import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import { GrClose } from 'react-icons/gr';
import { CloseButton, ModalContent, Overlay } from './styles';

const modalElement = document.getElementById('modal') as HTMLElement;

interface IModal {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
}

const Modal = ({ children, open, onClose }:IModal) => {
  if (!open) {
    return null;
  }

  return ReactDOM.createPortal(
    <>
      <Overlay isOpen={open} />
      <ModalContent>
        <CloseButton type="button" onClick={onClose}><GrClose /></CloseButton>
        {children}
      </ModalContent>
    </>,
    modalElement,
  );
};

export default Modal;
