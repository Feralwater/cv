import styled from 'styled-components';

export const PortfolioBlock = styled.section`
  background-color: ${({ theme }) => theme.colors.buttonHoverColor};
  min-height: 100vh;
  width: 100%;
  box-sizing: border-box;
  padding: 120px 20px 170px 308px;
  display: flex;
  flex-direction: column;
  gap: 100px;
`;
