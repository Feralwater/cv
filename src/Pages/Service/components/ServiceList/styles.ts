import styled from 'styled-components';

export const List = styled.ul`
  width: 100%;
  display: flex;
  padding: 60px 0 0 0;
  list-style-type: none;
  flex-wrap: wrap;
  gap: 30px;
  box-sizing: border-box;

  @media (max-width: ${({ theme }) => theme.media.medium}) {
    padding: 0;
  }
`;
