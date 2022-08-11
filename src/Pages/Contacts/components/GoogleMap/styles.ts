import styled from 'styled-components';

export const Map = styled.div`
  flex: 1 0 50%;
  
  & iframe {
    box-sizing: border-box;
    border: ${({ theme }) => theme.borders.mapBorder};
    filter: ${({ theme }) => (theme.theme === 'light' ? 'grayscale(1)' : 'invert(1)')};
  }
`;
