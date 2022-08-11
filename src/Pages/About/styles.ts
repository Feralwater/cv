import styled from 'styled-components';

export const AboutBlock = styled.section`
  background-color: ${({ theme }) => theme.colors.buttonHoverColor};
  min-height: 100vh;
  width: 100%;
  box-sizing: border-box;
  padding: 120px 20px 170px 308px;
`;

export const AboutContent = styled.div`
  width: 100%;
  display: flex;
  padding-top: 60px;
  justify-content: space-between;
`;

export const AboutInfo = styled.div`
  width: 100%;
  margin-bottom: 55px;
`;

export const Greeting = styled.h3`
  color: ${({ theme }) => theme.colors.font};
  font-size: 22px;
  font-weight: 400;
  margin: 0 0 15px 0;

  & span {
    font-weight: 600;
  }
`;

export const AboutSkills = styled.div`
  width: 100%;
`;

export const SkillsTitle = styled.h3`
  color: ${({ theme }) => theme.colors.font};
  font-size: 22px;
  font-weight: 600;
  margin: 0 0 15px 0;
`;

export const LeftPart = styled.div`
  flex: 0 1 50%;
`;

export const Skills = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  max-height: 250px;
  flex-wrap: wrap;
  gap: 40px;
`;

export const PictureContainer = styled.div`
  position: relative;
  width: 410px;
  height: 550px;
  box-sizing: border-box;
`;

export const AuthorPicture = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 10px;
  background: url("/img/photo_author.jpg") center/cover no-repeat;
  filter: grayscale(85%);
`;

export const AuthorExperience = styled.div`
  position: absolute;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.rhino};
  bottom: -50px;
  left: -50px;
`;

export const AuthorExperienceInfo = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  text-align: center;
  width: 100%;
  transform: translate(-50%, -50%);
  padding: 10px;
`;

export const Years = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  font-size: 35px;
  font-weight: 700;
  margin: 0;
`;

export const Experience = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-size: 19px;
  font-weight: 500;
`;
