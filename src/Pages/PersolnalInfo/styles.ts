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
`;
