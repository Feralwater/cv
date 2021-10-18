import React, {useEffect, useState} from 'react';
import {IoMdArrowDropup} from "react-icons/all";
import s from "./ScrollToTop.module.scss"

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false)
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)
        return () => {
            window.removeEventListener('scroll', toggleVisibility)
        }
    }, [])
    return (
        <button type="button"
                onClick={scrollToTop}
                className={s.button + " " + (isVisible ? s.button__visible : s.button__invisible)}
        >
            <IoMdArrowDropup aria-hidden='true'/>
        </button>
    );
};

export default ScrollToTop;