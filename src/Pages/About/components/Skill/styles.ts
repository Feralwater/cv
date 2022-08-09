import styled from 'styled-components';

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
`;
