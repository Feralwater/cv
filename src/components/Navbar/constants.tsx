import React from 'react';
import { ReactComponent as Portfolio } from 'assets/svg/portfolio.svg';
import { ReactComponent as Home } from 'assets/svg/home.svg';
import { ReactComponent as About } from 'assets/svg/man.svg';
import { ReactComponent as Service } from 'assets/svg/cog.svg';
import { ReactComponent as Testimonial } from 'assets/svg/testimonial.svg';
import { ReactComponent as Contacts } from 'assets/svg/contacts.svg';
import { ReactComponent as Blog } from 'assets/svg/blog.svg';

export const navbarConstants = [
  {
    navIcon: <Home />,
    navText: 'Home',
  },
  {
    navIcon: <About />,
    navText: 'About',
  },
  {
    navIcon: <Service />,
    navText: 'Service',
  },
  {
    navIcon: <Portfolio />,
    navText: 'Portfolio',
  },
  {
    navIcon: <Testimonial />,
    navText: 'Testimonial',
  },
  {
    navIcon: <Blog />,
    navText: 'Blog',
  },
  {
    navIcon: <Contacts />,
    navText: 'Contacts',
  },
];
