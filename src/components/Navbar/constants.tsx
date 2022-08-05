import React from 'react';
import { ReactComponent as Portfolio } from 'assets/svg/portfolio.svg';
import { ReactComponent as Home } from 'assets/svg/home.svg';
import { ReactComponent as About } from 'assets/svg/man.svg';
import { ReactComponent as Service } from 'assets/svg/cog.svg';
import { ReactComponent as Hobbies } from 'assets/svg/cogsMan.svg';
import { ReactComponent as Contacts } from 'assets/svg/contacts.svg';

export const navbarConstants = [
  {
    navIcon: <Home />,
    navText: 'Home',
    navTo: '#home',
  },
  {
    navIcon: <About />,
    navText: 'About',
    navTo: '#about',
  },
  {
    navIcon: <Service />,
    navText: 'Service',
    navTo: '#service',
  },
  {
    navIcon: <Portfolio />,
    navText: 'Portfolio',
    navTo: '#portfolio',
  },
  {
    navIcon: <Hobbies />,
    navText: 'Hobbies',
    navTo: '#hobbies',
  },
  {
    navIcon: <Contacts />,
    navText: 'Contacts',
    navTo: '#contacts',
  },
];
