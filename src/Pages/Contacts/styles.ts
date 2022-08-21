import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ContactsBlock = styled.section`
  background-color: ${({ theme }) => theme.colors.pageBackground};
  min-height: 100vh;
  width: 100%;
  box-sizing: border-box;
  padding: 50px 20px 50px 308px;
  overflow-x: hidden;
  
  @media (max-width: ${({ theme }) => theme.media.extraLarge}) {
    padding: 50px 20px;
  }
`;

export const ContactCards = styled.div`
  padding-top: 50px;
  margin-bottom: 30px;
  display: flex;
  gap: 30px;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.media.medium}) {
    flex-direction: column;
  }
`;

export const MailAuthor = styled.div`
  display: flex;
  width: 100%;
  gap: 60px;

  @media (max-width: ${({ theme }) => theme.media.extraLarge}) {
    flex-direction: column;
    align-items: baseline;
  }
`;

export const MailMe = styled(motion.div)`
  flex: 1 1 50%;
  transition: all 0.7s ease-in-out 1s;
`;
