import styled from 'styled-components';

export const Popup = styled.div`
  width: 970px;

  @media (max-width: ${({ theme }) => theme.media.extraLarge}) {
    width: 800px;
  }
  @media (max-width: ${({ theme }) => theme.media.large}) {
    width: 500px;
  }
  @media (max-width: ${({ theme }) => theme.media.small}) {
    width: 260px;
  }
`;

export const PopupRow = styled.div`
  display: flex;
  gap: 30px;

  @media (max-width: ${({ theme }) => theme.media.extraLarge}) {
    flex-direction: column;
  }
`;

export const Column = styled.div`
  flex: 0 1 50%;
`;

export const PopupHeader = styled.h3`
  font-size: 25px;
  margin-bottom: 35px;
  border-bottom: 2px dashed ${({ theme }) => theme.colors.gainsboro};
  padding-bottom: 10px;
  display: inline-block;
  color: ${({ theme }) => theme.colors.font};

  @media (max-width: ${({ theme }) => theme.media.small}) {
    font-size: 20px;
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: 15px;
`;

export const DownloadButton = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.font};
  font-weight: 500;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  border: ${({ theme }) => theme.borders.graniteBorder};
  padding: 15px 35px;
  border-radius: 30px;
  margin-top: 12px;
  gap: 10px;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.font};
    color: ${({ theme }) => theme.colors.buttonHoverColor};
    border-color: ${({ theme }) => theme.colors.font};
  }

  @media (max-width: ${({ theme }) => theme.media.small}) {
    font-size: 16px;
  }
`;
