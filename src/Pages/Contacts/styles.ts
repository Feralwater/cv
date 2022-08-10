import styled from 'styled-components';

export const ContactsBlock = styled.section`
  background-color: ${({ theme }) => theme.colors.pageBackground};
  min-height: 100vh;
  width: 100%;
  box-sizing: border-box;
  padding: 120px 20px 170px 308px;
`;

export const ContactCards = styled.div`
  padding-top: 50px;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const SubInfo = styled.div`
  max-width: 50%;
`;
