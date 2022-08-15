import styled from 'styled-components';

export const AchievementRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 30px;
`;

export const Achievement = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.gainsboro};
  padding: 20px 30px 25px 30px;
  box-sizing: border-box;
  flex: 0 1;
  min-width: 220px;
  border-radius: 5px;
  border: ${({ theme }) => theme.borders.navbarBorder};
`;

export const AchievementTitle = styled.h3`
  position: relative;
  display: inline-block;
  margin: 0;
  font-size: 40px;
  font-weight: 600;
  border: none;
  padding: 0;
  color: ${({ theme }) => theme.colors.popupItem};
  
  &:after {
    content: "+";
    position: absolute;
    right: -24px;
    font-size: 33px;
    font-weight: 300;
    top: 2px;
  }
  }
`;

export const AchievementDescription = styled.p`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  padding-left: 45px;
  font-size: 16px;
  line-height: 26px;
  color: ${({ theme }) => theme.colors.paragraph};
  
  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 13px;
    width: 30px;
    height: 1px;
    background: ${({ theme }) => theme.colors.boulder};
  }
`;
