import styled, { keyframes } from 'styled-components';

export const HomeBlock = styled.section`
  background-color: ${({ theme }) => theme.colors.pageBackground};
  min-height: 100vh;
  width: 100%;
  padding-left: 288px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  overflow-x: hidden;

  @media (max-width: ${({ theme }) => theme.media.extraLarge}) {
    padding: 50px 20px;
  }
`;

export const HomeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const HomeImageWrapper = styled.div`
  width: 245px;
  height: 245px;
`;

export const HomeImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(60%);
  mask-position: center center;
  mask-repeat: no-repeat;
  mask-image: url("/img/shape.svg");
`;

export const HomeName = styled.h5`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 14px;
  line-height: 1.2;
  text-align: center;
  color: ${({ theme }) => theme.colors.greeting};
`;

const blink = keyframes`
  50% {
     opacity: 0;
   }`;

export const TypedText = styled.h1`
  color: ${({ theme }) => theme.colors.font};
  font-size: 50px;
  font-weight: 700;
  line-height: 1.2;
  margin: 10px 0 12px;
  text-align: center;
  
  &:after {
    content: "|";
    animation: ${blink} 1s step-start infinite;
  }

  @media (max-width: ${({ theme }) => theme.media.medium}) {
    font-size: 32px;
  }
`;

export const HomeDescription = styled.p`
  max-width: 500px;
  margin: 0 auto 32px;
  color: ${({ theme }) => theme.colors.paragraph};
  text-align: center;
  line-height: 1.5;
  font-size: 18px;
`;

export const HomeButton = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.font};
  font-weight: 500;
  font-size: 18px;
  display: inline-block;
  border: ${({ theme }) => theme.borders.graniteBorder};
  padding: 15px 35px;
  border-radius: 30px;
  margin-top: 35px;
  transition: all 0.3s ease-in-out;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.font};
    transform: translateY(-5px);
    color: ${({ theme }) => theme.colors.buttonHoverColor};
    border-color: ${({ theme }) => theme.colors.font};
  }
`;

export const SocialMediaBlock = styled.ul`
    margin: 0;
    list-style: none;
    padding: 0;
`;
