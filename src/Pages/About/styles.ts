import { motion } from 'framer-motion';
import styled from 'styled-components';

export const AboutBlock = styled.section`
  background-color: ${({ theme }) => theme.colors.buttonHoverColor};
  min-height: 100vh;
  width: 100%;
  box-sizing: border-box;
  padding: 50px 20px 50px 308px;
  overflow-x: hidden;

  @media (max-width: ${({ theme }) => theme.media.extraLarge}) {
    padding: 50px 20px;
  }
`;

export const AboutContent = styled.div`
  width: 100%;
  display: flex;
  padding-top: 60px;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.media.large}) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    gap: 60px;
  }
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

export const AboutSkills = styled(motion.div)`
  width: 100%;
  transition: all 0.7s ease-in-out;
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

export const PictureContainer = styled(motion.div)`
  position: relative;
  width: 410px;
  height: 550px;
  box-sizing: border-box;
  transition: all 0.7s ease-in-out;
  
  @media (max-width: ${({ theme }) => theme.media.small}) {
    width: 280px;
    height: 380px;
  }
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

export const AuthorExperience = styled(motion.div)`
  position: absolute;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.rhino};
  bottom: -50px;
  left: -50px;
  transition: all 0.5s ease-in-out;

  @media (max-width: ${({ theme }) => theme.media.extraLarge}) {
    width: 150px;
    height: 150px;
  }

  @media (max-width: ${({ theme }) => theme.media.small}) {
    left: 0;
  }
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

  @media (max-width: ${({ theme }) => theme.media.extraLarge}) {
    font-size: 22px;
  }
`;

export const Experience = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-size: 19px;
  font-weight: 500;

  @media (max-width: ${({ theme }) => theme.media.extraLarge}) {
    font-size: 13px;
  }
`;
