import styled from 'styled-components';

export const PortfolioBlock = styled.section`
  background-color: ${({ theme }) => theme.colors.buttonHoverColor};
  min-height: 100vh;
  width: 100%;
  box-sizing: border-box;
  padding: 50px 20px 50px 308px;
  display: flex;
  flex-direction: column;
  gap: 100px;
`;

export const GithubLink = styled.a`
  color: ${({ theme }) => theme.colors.font};
`;
