import styled from 'styled-components';
import { motion } from 'framer-motion';
import Scrollspy from 'react-scrollspy';

export const NavBar = styled.div`
  width: 288px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.sidebarBackground};
  color: ${({ theme }) => theme.colors.font};
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  transition: all .5s ease;
  box-shadow: ${({ theme }) => theme.shadows.navbarShadow};
`;

export const NavbarLogo = styled.div`
  font-size: 34px;
  font-weight: 900;
  padding: 40px;
  border-bottom: ${({ theme }) => theme.borders.navbarBorder};
  box-sizing: border-box;
  cursor: none;
  
  &:first-letter {
    color: ${({ theme }) => theme.colors.firstLetter};
    text-decoration: underline;
  }
`;

export const LinksWrapper = styled(Scrollspy)`
  padding-inline-start: 0;
  list-style-type: none;
  margin: 0;
  padding: 60px 40px;
  
  & > li.is-current {
    background-color: ${({ theme }) => (theme.colors.activeAnchor)};
  }
  
  & > li {
    margin: 0 0 8px 0;
    display: flex;
    cursor: pointer;
    border-radius: 6px;
  }
`;

export const NavbarFooter = styled.footer`
  border-top: ${({ theme }) => theme.borders.navbarBorder};
  padding: 40px;
  display: flex;
  gap: 13px;
  align-items: center;
  margin-top: auto;
`;

export const AuthorData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const AuthorAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  display: inline-block;
  background: url("/img/mail_photo.jpg") no-repeat center / cover;
  border: ${({ theme }) => theme.borders.navbarBorder};
  filter: grayscale(100%);
  flex-shrink: 0;
  
  &::after {
    content: '';
    display: inline-block;
    width: 25px;
    height: 50px;
    background-color: ${({ theme }) => theme.colors.black};
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    filter: blur(1px);
  }
`;

export const AuthorName = styled.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: 1;
  color: ${({ theme }) => theme.colors.font};
  cursor: none;
  padding: 0;
  margin: 0;
`;

export const AuthorEmail = styled(motion.a)`
  cursor: pointer;
  text-decoration: none;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.granite};
`;

export const Anchor = styled.a`
  color: ${({ theme }) => theme.colors.font};
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  border-radius: 6px;
  padding: 13px 15px;
  position: relative;
  width: 100%;

  & svg {
    width: 22px;
    height: 22px;
    margin-right: 15px;
    filter: ${({ theme }) => (theme.theme === 'light' ? 'invert(0.3)' : 'invert(1)')};
    transition: all .3s ease;
    fill: ${({ theme }) => theme.colors.font};
  }

  &::before {
    position: absolute;
    content: "";
    width: 0;
    height: 100%;
    top: 0;
    left: 0;
    background-color: ${({ theme }) => (theme.colors.activeAnchor)};
    border-radius: 6px;
    z-index: -1;
    transition: all .3s ease;
  }

  &:hover&::before {
    width: 100%;
  }
`;
