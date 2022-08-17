import React, { ReactNode, useRef } from 'react';
import Modal from 'components/Modal';
import {
  Inner, ItemInner, ItemInnerHeader, ItemInnerImg, RightArrow,
} from './styles';

interface IServiceListItem {
  img: ReactNode;
  header: string;
}

const ServiceListItem = ({ img, header }:IServiceListItem) => {
  const modal = useRef<{open:()=>void}>(null);
  const openModalHandler = () => modal.current?.open();

  return (
    <>
      <ItemInner key={header} onClick={openModalHandler}>
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
      <Modal ref={modal}>
        hhhh
      </Modal>
    </>
  );
};

export default ServiceListItem;
