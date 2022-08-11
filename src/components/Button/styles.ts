import styled from 'styled-components';

export const StyledButton = styled.button`
  border-radius: 6px;
  padding: 13px 30px;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.rangoonGreen};
  border-color: ${({ theme }) => theme.colors.black};
  margin: 30px 0 0 0;
  font-size: 18px;
  letter-spacing: .4px;
  transition: .5s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
    border-color: ${({ theme }) => theme.colors.font};
  }
`;
