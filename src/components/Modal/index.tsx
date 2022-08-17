import React, {
  forwardRef, ReactNode, useCallback, useEffect, useImperativeHandle, useState, MouseEvent,
} from 'react';
import ReactDOM from 'react-dom';
import { GrClose } from 'react-icons/gr';
import {
  CloseButton, ModalContent, ModalWrapper, Overlay,
} from './styles';

const modalElement = document.getElementById('modal') as HTMLElement;

interface IModal {
  children: ReactNode;
}

const Modal = forwardRef(({ children }:IModal, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  const close = useCallback(() => setIsOpen(false), []);
  const onModalContentClick = (event: MouseEvent<HTMLDivElement>) => event.stopPropagation();

  useImperativeHandle(ref, () => ({
    open: () => setIsOpen(true),
    close,
  }), [close]);

  const handleEscape = useCallback((event) => {
    if (event.keyCode === 27) {
      close();
    }
  }, [close]);

  useEffect(() => {
    if (isOpen) document.addEventListener('keydown', handleEscape, false);
    return () => {
      document.removeEventListener('keydown', handleEscape, false);
    };
  }, [handleEscape, isOpen]);

  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <>
      <Overlay onClick={close} />
      <ModalWrapper>
        <CloseButton type="button" onClick={close}><GrClose /></CloseButton>
        <ModalContent onClick={onModalContentClick}>
          {children}
        </ModalContent>
      </ModalWrapper>
    </>,
    modalElement,
  );
});

export default Modal;
