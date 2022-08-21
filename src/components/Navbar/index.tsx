import React from 'react';
import { navbarConstants } from 'components/Navbar/constants';
import Logo from 'components/Logo';
import {
  Anchor,
  AuthorAvatar,
  AuthorData,
  AuthorEmail,
  AuthorName,
  LinksWrapper,
  NavBar,
  NavbarFooter,
  NavbarLogo,
} from './styles';

const Navbar = () => (
  <NavBar>
    <NavbarLogo>
      <Logo />
    </NavbarLogo>
    <nav>
      <LinksWrapper
        items={['home', 'about', 'service', 'portfolio', 'contacts']}
        currentClassName="is-current"
      >
        {
          navbarConstants.map(({ navIcon, navText }) => (
            <li key={navText}>
              <Anchor href={`#${navText.toLowerCase()}`}>
                {navIcon}
                {navText}
              </Anchor>
            </li>
          ))
        }
      </LinksWrapper>
    </nav>
    <NavbarFooter>
      <AuthorAvatar />
      <AuthorData>
        <AuthorName>Victoria</AuthorName>
        <AuthorEmail
          href="mailto:lineviktoriya@gmail.com"
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          mail me
        </AuthorEmail>
      </AuthorData>
    </NavbarFooter>
  </NavBar>
);

export default Navbar;
