import styled from 'styled-components';

export const StyledLogo = styled.div`
  font-size: 26px;
  font-weight: 500;
  box-sizing: border-box;
  cursor: none;
  max-width: 1170px;
  padding: 0 15px;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.font};
}
  
  &:first-letter {
    color: ${({ theme }) => theme.colors.firstLetter};
    text-decoration: underline;
  }
`;
