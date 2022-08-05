import styled, {keyframes} from 'styled-components';

export const HomeBlock = styled.div`
  background-color: ${props => props.theme.colors.pageBackground};
  min-height: 100vh;
  width: 100%;
  padding-left: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

export const HomeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 100px 20px;
`;

export const HomeImage = styled.img`
  width: 300px;
  height: 300px;
`;

export const HomeName = styled.h5`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 14px;
  line-height: 1.2;
  color: #ffffff;
`;

const blink = keyframes`
  50% {
     opacity: 0;
   }`;

export const BlinkingCursor = styled.span`
  &:after {
    content: "|";
    animation: ${blink} 1s step-start infinite;
  }
`;

export const HomeDescription = styled.div`
  max-width: 500px;
  margin: 0 auto 32px;
  color: #a9afc3;
  text-align: center;
  line-height: 1.5;
  font-size: 18px;
`;

export const HomeButton = styled.a`
  text-decoration: none;
  color: #ffffff;
  font-weight: 500;
  font-size: 18px;
  display: inline-block;
  border: 2px solid #a9afc3;
  padding: 15px 35px;
  border-radius: 30px;
  margin-top: 35px;
`;

