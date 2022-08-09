import styled from 'styled-components';

interface IScrollToTopButton {
  isVisible: boolean;
}

export const ScrollToTopButton = styled.button<IScrollToTopButton>`
  position: fixed;
  right: 15px;
  bottom: 30px;
  background-color: ${({ theme }) => theme.colors.font};
  padding: 10px 12px;
  border-radius: 4px;
  display: inline-block;
  overflow: hidden;
  cursor: pointer;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  color: ${({ theme }) => theme.colors.sidebarBackground};
  font-size: 20px;
  border: none;
`;
