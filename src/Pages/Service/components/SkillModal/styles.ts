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
    max-height: 300px;
  }
  @media (max-width: ${({ theme }) => theme.media.medium}) {
    max-height: 250px;
    margin-bottom: 30px;
  }
  @media (max-width: ${({ theme }) => theme.media.small}) {
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
