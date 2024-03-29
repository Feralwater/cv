import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  background: ${({ theme }) => theme.colors.header};
  box-shadow: ${({ theme }) => theme.shadows.headerShadow};
  z-index: 99;
  padding: 20px 0;
  display: none;
  box-sizing: border-box;
  
  @media (max-width: ${({ theme }) => theme.media.extraLarge}) {
    display: block;
  }
`;

export const MobToggle = styled.div`
  position: fixed;
  right: 20px;
  top: 13px;
  z-index: 99;
  display: none;
  
  @media (max-width: ${({ theme }) => theme.media.extraLarge}) {
    display: block;
  }
`;
