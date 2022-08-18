import React, { ReactNode, useRef } from 'react';
import Modal from 'components/Modal';
import {
  Inner, ItemInner, ItemInnerHeader, ItemInnerImg, RightArrow,
} from './styles';

interface IServiceListItem {
  img: ReactNode;
  header: string;
  modal: ReactNode;
}

const ServiceListItem = ({ img, header, modal }:IServiceListItem) => {
  const modalRef = useRef<{open:()=>void}>(null);
  const openModalHandler = () => modalRef.current?.open();

  return (
    <>
      <ItemInner
        key={header}
        onClick={openModalHandler}
        initial={{ opacity: 0, x: '-200' }}
        whileInView={{ opacity: 1, x: '0' }}
      >
        <div>
          <ItemInnerImg>{img}</ItemInnerImg>
          <ItemInnerHeader>{header}</ItemInnerHeader>
        </div>
        <Inner>
          Learn more
          {' '}
          <RightArrow />
        </Inner>
      </ItemInner>
      <Modal ref={modalRef}>
        {modal}
      </Modal>
    </>
  );
};

export default ServiceListItem;
