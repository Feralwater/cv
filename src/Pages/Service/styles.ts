import styled from 'styled-components';

export const ServiceBlock = styled.section`
  background-color: ${({ theme }) => theme.colors.pageBackground};
  min-height: 100vh;
  width: 100%;
  box-sizing: border-box;
  padding: 120px 20px 170px 308px;
`;

export const ServiceInfo = styled.div`
  width: 50%;
`;
