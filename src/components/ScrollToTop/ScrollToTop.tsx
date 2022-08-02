import React, {useEffect, useState} from 'react';
import {IoMdArrowDropup} from "react-icons/all";
import {ScrollToTopButton} from './ScrollToTop.styles';

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
      behavior: "smooth",
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <ScrollToTopButton type="button"
                       onClick={scrollToTop}
                       isVisible={isVisible}
    >
      <IoMdArrowDropup aria-hidden="true"/>
    </ScrollToTopButton>
  );
};

export default ScrollToTop;
