import React from 'react';
import s from "./App.module.scss"
import Navbar from "./navBar/Navbar";
import Home from "./home/Home";

function App() {
    return (
        <div className={s.App}>
            <Navbar/>
            <Home/>
        </div>
    );
}

export default App;
