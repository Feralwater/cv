import React from 'react';
import {
  ButtonWrapper,
  Column, DownloadButton,
  ExperienceItem,
  ExperienceList,
  Icon,
  JobDescription,
  JobPlace,
  JobTitle,
  Popup,
  PopupHeader,
  PopupRow,
  Time,
} from 'Pages/PersolnalInfo/styles';
import { FiBookOpen, FiBriefcase } from 'react-icons/fi';
import AboutList from 'Pages/PersolnalInfo/components/AboutList';
import { HiOutlineArrowDown } from 'react-icons/hi';
import AchievementList from 'Pages/PersolnalInfo/components/AchievementList';

const PersonalInfo = () => (
  <Popup>
    <PopupRow>
      <Column>
        <PopupHeader>Personal Info</PopupHeader>
        <AboutList />
        <ButtonWrapper>
          <DownloadButton
            href="ITRex Group - CV.pdf"
            download
          >
            <span>ITRex Group - CV</span>
            <HiOutlineArrowDown />
          </DownloadButton>
        </ButtonWrapper>
      </Column>
      <Column>
        <PopupHeader>Achievements</PopupHeader>
        <AchievementList />
      </Column>
    </PopupRow>
    <PopupRow>
      <Column>
        <PopupHeader>Experience</PopupHeader>
        <ExperienceList>
          <ExperienceItem>
            <Icon><FiBriefcase /></Icon>
            <Time>2018</Time>
            <JobTitle>
              nnnnnnnnn
              <JobPlace>
                jxvn kxjv
              </JobPlace>
              <JobDescription>jvnkxj</JobDescription>
            </JobTitle>
          </ExperienceItem>
          <ExperienceItem>
            <Icon><FiBriefcase /></Icon>
            <Time>2018</Time>
            <JobTitle>
              nnnnnnnnn
              <JobPlace>
                jxvn kxjv
              </JobPlace>
              <JobDescription>jvnkxj</JobDescription>
            </JobTitle>
          </ExperienceItem>
          <ExperienceItem>
            <Icon><FiBriefcase /></Icon>
            <Time>2018</Time>
            <JobTitle>
              nnnnnnnnn
              <JobPlace>
                jxvn kxjv
              </JobPlace>
              <JobDescription>jvnkxj</JobDescription>
            </JobTitle>
          </ExperienceItem>
        </ExperienceList>
      </Column>
      <Column>
        <PopupHeader>Education</PopupHeader>
        <ExperienceList>
          <ExperienceItem>
            <Icon><FiBookOpen /></Icon>
            <Time>2018</Time>
            <JobTitle>
              nnnnnnnnn
              <JobPlace>
                jxvn kxjv
              </JobPlace>
              <JobDescription>jvnkxj</JobDescription>
            </JobTitle>
          </ExperienceItem>
          <ExperienceItem>
            <Icon><FiBookOpen /></Icon>
            <Time>2018</Time>
            <JobTitle>
              nnnnnnnnn
              <JobPlace>
                jxvn kxjv
              </JobPlace>
              <JobDescription>jvnkxj</JobDescription>
            </JobTitle>
          </ExperienceItem>
          <ExperienceItem>
            <Icon><FiBookOpen /></Icon>
            <Time>2018</Time>
            <JobTitle>
              nnnnnnnnn
              <JobPlace>
                jxvn kxjv
              </JobPlace>
              <JobDescription>jvnkxj</JobDescription>
            </JobTitle>
          </ExperienceItem>
        </ExperienceList>
      </Column>
    </PopupRow>
  </Popup>
);

export default PersonalInfo;
