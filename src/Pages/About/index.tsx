import React from 'react';
import {
  AboutBlock,
  AboutContent,
  AboutInfo,
  AboutSkills,
  AboutTitle,
  AuthorExperience,
  AuthorExperienceInfo,
  AuthorPicture,
  Experience,
  Greeting,
  LeftPart,
  PictureContainer,
  SeeMoreButton,
  Skills,
  SkillsTitle, Years,
} from 'Pages/About/styles';
import Paragraph from 'components/Paragraph/Paragraph';
import { skills } from 'Pages/About/components/Skill/constants';
import Skill from 'Pages/About/components/Skill';

const About = () => (
  <AboutBlock id="about">
    <AboutTitle>About Me</AboutTitle>
    <AboutContent>
      <LeftPart>
        <AboutInfo>
          <Greeting>
            Hi, I`m
            {' '}
            <span>Victoria Buyakova</span>
          </Greeting>
          <Paragraph
            text="I`m a Front-end Developer with over 1 year of experience.
            My job is  architects and develops websites and applications using web technologies.
            I like work with new people."
          />
        </AboutInfo>
        <AboutSkills>
          <SkillsTitle>What is my primary skills?</SkillsTitle>
          <div>
            <Paragraph
              text="Here is my primary skills and how often I use them."
            />
            <Skills>
              {skills.map((skill) => (
                <Skill key={skill} skill={skill} />
              ))}
            </Skills>
          </div>
          <SeeMoreButton type="button">See More</SeeMoreButton>
        </AboutSkills>
      </LeftPart>
      <div>
        <PictureContainer>
          <AuthorPicture />
          <AuthorExperience>
            <AuthorExperienceInfo>
              <Years>1+ Year</Years>
              <Experience>Of Experience</Experience>
            </AuthorExperienceInfo>
          </AuthorExperience>
        </PictureContainer>
      </div>
    </AboutContent>
  </AboutBlock>
);

export default About;
