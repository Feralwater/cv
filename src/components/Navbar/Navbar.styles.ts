import styled from 'styled-components';

export const NavBar = styled.div`
  width: 320px;
  height: 100vh;
  background-color: #000000;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  transition: all .5s ease;
`;

export const NavbarLogo = styled.div`
  font-size: 30px;
  font-weight: 700;
  padding: 50px;
  border-bottom: 2px solid #5e5e5e;

  &:first-letter {
    color: #527ca6;
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
`;

export const Anchor = styled.a`
  display: inline-block;
  color: #ffffff;
  text-decoration: none;
  padding: 20px;
  font-weight: 500;
  font-size: 18px;

  & svg {
    margin-right: 20px;
  }

  &:hover {
    background-color: #191c26;
    border-radius: 6px;
    width: 100%;
  }
`;

export const Contacts = styled.div`
  border-top: 2px solid #5e5e5e;
  padding: 50px;
  display: flex;
  align-items: center;
  width: 220px;
  justify-content: space-between;
  margin-top: auto;
`;
