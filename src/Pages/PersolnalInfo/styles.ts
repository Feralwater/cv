import styled from 'styled-components';

export const Popup = styled.div`
  width: 970px;
`;

export const PopupRow = styled.div`
  display: flex;
  gap: 30px;
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
`;

export const ButtonWrapper = styled.div`
  margin-top: 15px;
`;

export const AchievementRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 30px;
`;

export const AchievementWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 30px;
`;

export const Achievement = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.gainsboro};
  padding: 20px 30px 25px 30px;
  box-sizing: border-box;
`;

export const AchievementTitle = styled.h3`
  position: relative;
  display: inline-block;
  margin: 0;
  font-size: 40px;
  font-weight: 600;
  border: none;
  padding: 0;
  color: ${({ theme }) => theme.colors.rhino};
  
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

export const ExperienceList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const ExperienceItem = styled.li`
  position: relative;
  padding: 0 20px 0 60px;
  margin: 0 0 50px;
  
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 20px;
    bottom: 0;
    border-left: 1px solid #ddd;
  }
`;

export const Icon = styled.div`
  width: 40px;
  height: 40px;
  position: absolute;
  left: 0;
  right: 0;
  line-height: 40px;
  text-align: center;
  z-index: 1;
  border-radius: 50%;
  color: #fff;
  background-color: #34495e;
`;

export const Time = styled.span`
  color: #333;
  font-size: 12px;
  padding: 1px 15px;
  display: inline-block;
  margin-bottom: 12px;
  border-radius: 20px;
  font-weight: 600;
  background-color: #eee;
`;

export const JobTitle = styled.h5`
  font-size: 18px;
  margin: 7px 0 10px;
  color: #34495e;
  font-weight: 600;
  line-height: 1.5;
`;

export const JobPlace = styled.h5`
  opacity: .8;
  font-weight: 600;
  font-size: 15px;
  position: relative;
  padding-left: 26px;
  
  &:before {
    position: absolute;
    content: "";
    width: 10px;
    height: 2px;
    background-color: #444;
    left: 7px;
    top: 9px;
    opacity: .8;
  }
`;

export const JobDescription = styled.p`
  margin: 0;
  font-size: 15px;
  line-height: 27px;
`;
