import styled from 'styled-components';

export const AboutListWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  list-style: none;

  @media (max-width: ${({ theme }) => theme.media.large}) {
    flex-direction: column;
  }
`;

export const AboutItem = styled.li`
  flex: 0 0 50%;
  max-width: 50%;
  font-size: 16px;
  padding-bottom: 20px;

  @media (max-width: ${({ theme }) => theme.media.small}) {
    font-size: 12px;
    padding-bottom: 10px;
  }
`;

export const AboutTitle = styled.span`
  opacity: .8;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.paragraph};
`;

export const AboutValue = styled.span`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.popupItem};
  line-height: 1.5;
`;
