import React, { useState } from 'react';
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
import Paragraph from 'components/Paragraph/Paragraph';
import { skills } from 'Pages/About/components/Skill/constants';
import Skill from 'Pages/About/components/Skill';
import { H3 } from 'topography';
import Modal from 'components/Modal';
import Button from 'components/Button';

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);

  return (
    <AboutBlock id="about">
      <H3>About Me</H3>
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
            <Button onClick={openModal} type="button">
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
      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        Modal
      </Modal>
    </AboutBlock>
  );
};

export default About;
