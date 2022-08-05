import React, { createContext, useMemo, useState } from 'react';

interface IContextProps {
    cursorType: string
    cursorChangeHandler: (cursorType: string) => void
}

export const MouseContext = createContext({
  cursorType: '',
  cursorChangeHandler: () => {
  },
} as IContextProps);

const MouseContextProvider: React.FC = ({ children }) => {
  const [cursorType, setCursorType] = useState('');

  const cursorChangeHandler = () => setCursorType(cursorType);

  const memoizeContext = useMemo(() => ({
    cursorType,
    cursorChangeHandler,
  }), [cursorType, cursorChangeHandler]);

  return (
    <MouseContext.Provider
      value={memoizeContext}
    >
      {children}
    </MouseContext.Provider>
  );
};

export default MouseContextProvider;
