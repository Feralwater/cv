import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SkillLabel = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.font};
  margin-bottom: 10px;
  display: inline-block;
`;

export const ProgressInner = styled.div`
  width: 100%;
  min-width: 100%;
  position: relative;
  height: 16px;
  border: ${({ theme }) => theme.borders.progressBorder};
  padding: 2px;
  box-sizing: border-box;
  overflow: hidden;
`;

export const Bar = styled.div`
  height: 100%;
`;

interface IInner {
  width: number;
}

export const Inner = styled(motion.div)<IInner>`
  height: 100%;
  width: ${({ width }) => width}%;
  background: ${({ theme }) => theme.colors.rhino};
  transition: all 1.5s ease-in-out;
`;
