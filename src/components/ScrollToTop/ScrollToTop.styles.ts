import styled from 'styled-components';

interface IScrollToTopButton {
  isVisible: boolean;
}

export const ScrollToTopButton = styled.button<IScrollToTopButton>`
  position: fixed;
  right: 15px;
  bottom: 30px;
  background-color: #eeeeee;
  padding: 15px;
  border-radius: 3px;
  display: inline-block;
  overflow: hidden;
  cursor: none;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
`;
