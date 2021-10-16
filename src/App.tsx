import React from 'react';
import s from "./App.module.scss"
import Navbar from "./navBar/Navbar";
import Home from "./home/Home";
import Cursor from "./cursor/Cursor";

function App() {
    return (
        <div className={s.App}>
            <Navbar/>
            <Home/>
            <Cursor/>
        </div>
    );
}

export default App;
