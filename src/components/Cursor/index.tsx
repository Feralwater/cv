import React, { useEffect, useState } from 'react';
import { Dot, Ring } from 'components/Cursor/styles';
import useMousePosition from '../../hooks/useMousePosition';

const Cursor: React.VFC = () => {
  const { x, y } = useMousePosition();
  const [isMouseDown, setIsMouseDown] = useState(false);

  useEffect(() => {
    const mouseDown = () => setIsMouseDown(true);
    const mouseUp = () => setIsMouseDown(false);

    document.addEventListener('mousedown', mouseDown);
    document.addEventListener('mouseup', mouseUp);

    return () => {
      document.removeEventListener('mousedown', mouseDown);
      document.removeEventListener('mouseup', mouseUp);
    };
  }, []);

  return (
    <>
      <Ring style={{ left: `${x}px`, top: `${y}px` }} isMouseDown={isMouseDown} />
      <Dot style={{ left: `${x}px`, top: `${y}px` }} />
    </>
  );
};

export default Cursor;
