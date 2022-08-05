import React from 'react';
import useMousePosition from '../../hooks/useMousePosition';
import { Dot, Ring } from './Cursor.styles';

const Cursor: React.VFC = () => {
  const { x, y } = useMousePosition();

  return (
    <>
      <Ring style={{ left: `${x}px`, top: `${y}px` }} />
      <Dot style={{ left: `${x}px`, top: `${y}px` }} />
    </>
  );
};

export default Cursor;
