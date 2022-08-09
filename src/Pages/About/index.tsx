import React from 'react';
import {
  AboutBlock,
  AboutContent,
  AboutInfo,
  AboutSkills,
  AboutTitle, AuthorExperience, AuthorExperienceInfo, AuthorPicture, Experience,
  Greeting,
  LeftPart, PictureContainer,
  ProgressInner,
  RightPart, SeeMoreButton, Skill, SkillLabel, Skills, SkillsBlock,
  SkillsTitle, Years,
} from 'Pages/About/styles';
import Paragraph from 'components/Paragraph/Paragraph';

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
              <SkillsBlock>
                <Skill>
                  <SkillLabel>Javascript</SkillLabel>
                  <ProgressInner><div /></ProgressInner>
                </Skill>
                <Skill>
                  <SkillLabel>React.js</SkillLabel>
                  <ProgressInner><div /></ProgressInner>
                </Skill>
                <Skill>
                  <SkillLabel>Typescript</SkillLabel>
                  <ProgressInner><div /></ProgressInner>
                </Skill>
              </SkillsBlock>
              <SkillsBlock>
                <Skill>
                  <SkillLabel>Redux.js</SkillLabel>
                  <ProgressInner><div /></ProgressInner>
                </Skill>
                <Skill>
                  <SkillLabel>Css3</SkillLabel>
                  <ProgressInner><div /></ProgressInner>
                </Skill>
                <Skill>
                  <SkillLabel>GraphQL</SkillLabel>
                  <ProgressInner><div /></ProgressInner>
                </Skill>
              </SkillsBlock>
            </Skills>
          </div>
          <SeeMoreButton type="button">See More</SeeMoreButton>
        </AboutSkills>
      </LeftPart>
      <RightPart>
        <PictureContainer>
          <AuthorPicture />
          <AuthorExperience>
            <AuthorExperienceInfo>
              <Years>1+ Year</Years>
              <Experience>Of Experience</Experience>
            </AuthorExperienceInfo>
          </AuthorExperience>
        </PictureContainer>
      </RightPart>
    </AboutContent>
  </AboutBlock>
);

export default About;
