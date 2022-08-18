import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Map = styled(motion.div)`
  flex: 1 0 50%;
  transition: all 0.7s ease-in-out 1s;
  
  & iframe {
    box-sizing: border-box;
    border: ${({ theme }) => theme.borders.mapBorder};
    filter: ${({ theme }) => (theme.theme === 'light' ? 'grayscale(1)' : 'invert(1)')};
  }
`;
