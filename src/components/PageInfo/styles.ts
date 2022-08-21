import styled from 'styled-components';

export const Info = styled.div`
  width: 50%;

  @media (max-width: ${({ theme }) => theme.media.medium}) {
    width: 100%;
  }
`;

export const H3 = styled.h3`
  color: ${({ theme }) => theme.colors.font};
  font-size: 45px;
  font-weight: 700;
  line-height: 1;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.media.small}) {
    font-size: 35px;
  }
`;
