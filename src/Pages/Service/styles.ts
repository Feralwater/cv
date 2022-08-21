import styled from 'styled-components';

export const ServiceBlock = styled.section`
  background-color: ${({ theme }) => theme.colors.pageBackground};
  min-height: 100vh;
  width: 100%;
  box-sizing: border-box;
  padding: 50px 20px 50px 308px;

  @media (max-width: ${({ theme }) => theme.media.extraLarge}) {
    padding: 50px 20px;
  }
`;
