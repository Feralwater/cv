import styled from 'styled-components';

export const StyledInput = styled.input`
  background-color: ${({ theme }) => theme.colors.transparent};
  width: 100%;
  height: 50px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: ${({ theme }) => theme.borders.navbarBorder};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.granite};
  font-weight: 500;

  &:focus {
    border-bottom-color: ${({ theme }) => theme.colors.midnight};
    outline: none;
  }
`;
