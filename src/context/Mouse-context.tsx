import React, {createContext, useState} from "react";

interface IContextProps {
    cursorType: string
    cursorChangeHandler: (cursorType: string) => void
}

export const MouseContext = createContext({
    cursorType: "",
    cursorChangeHandler: () => {
    },
} as IContextProps);

const MouseContextProvider: React.FC = ({children}) => {
    const [cursorType, setCursorType] = useState("");

    const cursorChangeHandler = (cursorType: string) => {
        setCursorType(cursorType);
    };

    return (
        <MouseContext.Provider
            value={{
                cursorType,
                cursorChangeHandler,
            }}
        >
            {children}
        </MouseContext.Provider>
    );
};

export default MouseContextProvider;