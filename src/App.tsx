import React from 'react';
import s from "./App.module.scss"
import Navbar from "./navBar/Navbar";
import Home from "./home/Home";
import Cursor from "./cursor/Cursor";
import About from "./about/About";
import ScrollToTop from "./scrollToTop/ScrollToTop";

function App() {
    return (
        <>
            <Navbar/>
            <Home/>
            <About/>
            <Cursor/>
            <ScrollToTop/>
        </>
    );
}

export default App;
