import styled from 'styled-components';

export const LinkContainer = styled.li`
  margin: 0 0 8px 0;
  display: flex;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.shadows.navLinksShadow};
  border-radius: 6px;
  transition: box-shadow .3s ease-in-out;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.navLinksHoverShadow};
  }
`;

interface IAnchor {
  isActive: boolean;
}

export const Anchor = styled.a<IAnchor>`
  color: ${({ theme }) => theme.colors.font};
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  border-radius: 6px;
  padding: 13px 15px;
  position: relative;
  transition: all .3s ease;
  width: 100%;
  background-color: ${({ theme, isActive }) => (isActive ? theme.colors.activeAnchor : 'transparent')};

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
