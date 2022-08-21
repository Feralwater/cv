import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Card = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.buttonHoverColor};
  display: inline-flex;
  padding: 35px 35px 48px 35px;
  border-radius: 6px;
  gap: 15px;
  min-width: fit-content;
  flex: 0 1 30%;
  overflow: hidden;
  box-sizing: border-box;
  box-shadow: ${({ theme }) => theme.shadows.rightShadow};
  transition: all 0.7s ease-in-out;
`;

export const Icon = styled.div`
  background-color: ${({ theme }) => theme.colors.rhino};
  width: 55px;
  height: 55px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  & svg {
    width: 25px;
    height: 25px;
    filter: invert(1);
  }
`;

export const Info = styled.div`
  flex: 1 1;
`;

export const CardName = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin: 0 0 10px 0;
  color: ${({ theme }) => theme.colors.font};
`;

export const Contacts = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Contact = styled.li`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.paragraph};
`;
