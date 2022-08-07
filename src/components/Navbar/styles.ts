import styled from 'styled-components';

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
  
  &:first-letter {
    color: ${({ theme }) => theme.colors.firstLetter};
    text-decoration: underline;
  }
`;

export const LinksWrapper = styled.ul`
  padding-inline-start: 0;
  list-style-type: none;
  margin: 0;
  padding: 50px 0 50px 30px;
`;

export const LinkContainer = styled.li`
  width: 220px;
  display: flex;
`;

export const Anchor = styled.a`
  display: inline-block;
  color: ${({ theme }) => theme.colors.font};
  text-decoration: none;
  padding: 20px;
  font-weight: 500;
  font-size: 18px;

  & svg {
    margin-right: 20px;
    fill: ${({ theme }) => theme.colors.font};
  }

  &:hover {
    background-color: #191c26;
    border-radius: 6px;
    width: 100%;
  }
`;

export const NavbarFooter = styled.footer`
  border-top: ${({ theme }) => theme.borders.navbarBorder};
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
`;
