import styled from 'styled-components';

export const StyledParagraph = styled.p`
  color: ${({ theme }) => theme.colors.paragraph};
  font-size: 18px;
  line-height: 1.5;

  @media (max-width: ${({ theme }) => theme.media.medium}) {
    font-size: 16px;
  }
  @media (max-width: ${({ theme }) => theme.media.small}) {
    font-size: 12px;
  }
`;
