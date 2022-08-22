import styled from 'styled-components';

export const BannerWrapper = styled.div`
  height: 450px;
  width: 950px;
  background-color: ${({ theme }) => theme.colors.amour};
  border-radius: 6px;
  max-height: 450px;
  margin-bottom: 50px;
  overflow: hidden;
  box-sizing: border-box;

  @media (max-width: ${({ theme }) => theme.media.extraLarge}) {
    height: 300px;
    width: 550px;
  }
  @media (max-width: ${({ theme }) => theme.media.medium}) {
    height: 250px;
    width: 500px;
    margin-bottom: 30px;
  }
  @media (max-width: ${({ theme }) => theme.media.small}) {
    height: 150px;
    width: 250px;
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
