import styled from 'styled-components';

export const BannerWrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.amour};
  border-radius: 6px;
  max-height: 450px;
  margin-bottom: 50px;
  overflow: hidden;
  box-sizing: border-box;
  font-size: 0;

  @media (max-width: ${({ theme }) => theme.media.extraLarge}) {
    min-width: 850px;
    max-height: 450px;
  }
  @media (max-width: ${({ theme }) => theme.media.large}) {
    min-width: 600px;
    max-height: 250px;
  }
  @media (max-width: ${({ theme }) => theme.media.medium}) {
    min-width: 500px;
    max-height: 250px;
    margin-bottom: 30px;
  }
  @media (max-width: ${({ theme }) => theme.media.small}) {
    min-width: 260px;
    max-height: 150px;
  }
`;

export const Banner = styled.img`
  width: 100%;
  height: 100%;
  filter: grayscale(85%);
`;

export const ModalTitle = styled.h3`
  color: ${({ theme }) => theme.colors.modalTitle};
  font-size: 23px;
  font-weight: 700;
  margin-bottom: 15px;

  @media (max-width: ${({ theme }) => theme.media.medium}) {
    font-size: 16px;
  }
`;
