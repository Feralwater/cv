import useMousePosition from "../hooks/useMousePosition"
import React from "react";
import s from "./Cursor.module.scss"

const Cursor: React.VFC = () => {

    const {x, y} = useMousePosition();
    return (
        <>
            <div style={{left: `${x}px`, top: `${y}px`}}
                 className={s.ring}
            />
            <div className={s.dot}
                 style={{left: `${x}px`, top: `${y}px`}}
            />
        </>
    );
};

export default Cursor;