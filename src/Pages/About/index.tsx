import React, { useRef } from 'react';
import {
  AboutBlock,
  AboutContent,
  AboutInfo,
  AboutSkills,
  AuthorExperience,
  AuthorExperienceInfo,
  AuthorPicture,
  Experience,
  Greeting,
  LeftPart,
  PictureContainer,
  Skills,
  SkillsTitle,
  Years,
} from 'Pages/About/styles';
import Paragraph from 'components/Paragraph';
import { skills } from 'Pages/About/components/Skill/constants';
import Skill from 'Pages/About/components/Skill';
import Modal from 'components/Modal';
import Button from 'components/Button';
import PersonalInfo from 'Pages/PersolnalInfo';
import PageInfo from 'components/PageInfo';

const About = () => {
  const modal = useRef<{open:()=>void}>(null);
  const openModalHandler = () => modal.current?.open();

  return (
    <AboutBlock id="about">
      <PageInfo
        header="About Me"
      />
      <AboutContent>
        <LeftPart>
          <AboutInfo>
            <Greeting>
              Hi, I`m
              {' '}
              <span>Victoria Buyakova</span>
            </Greeting>
            <Paragraph>
              I`m a Front-end Developer with over 1 year of experience.
              My job is  architects and develops websites and applications using web technologies.
              I like work with new people.
            </Paragraph>
          </AboutInfo>
          <AboutSkills>
            <SkillsTitle>What is my primary skills?</SkillsTitle>
            <div>
              <Paragraph>
                Here is my primary skills and how often I use them.
              </Paragraph>
              <Skills>
                {skills.map((skill) => (
                  <Skill key={skill} skill={skill} />
                ))}
              </Skills>
            </div>
            <Button onClick={openModalHandler} type="button">
              See More
            </Button>
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
      <Modal ref={modal}>
        <PersonalInfo />
      </Modal>
    </AboutBlock>
  );
};

export default About;
