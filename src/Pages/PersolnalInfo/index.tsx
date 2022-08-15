import React from 'react';
import {
  Achievement,
  AchievementDescription,
  AchievementRow,
  AchievementTitle,
  AchievementWrapper,
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
        <AchievementRow>
          <AchievementWrapper>
            <Achievement>
              <AchievementTitle>01</AchievementTitle>
              <AchievementDescription>years of Experience</AchievementDescription>
            </Achievement>
            <Achievement>
              <AchievementTitle>10</AchievementTitle>
              <AchievementDescription>Completed Projects</AchievementDescription>
            </Achievement>
          </AchievementWrapper>
          <AchievementWrapper>
            <Achievement>
              <AchievementTitle>15</AchievementTitle>
              <AchievementDescription>Completed Courses</AchievementDescription>
            </Achievement>
            <Achievement>
              <AchievementTitle>20</AchievementTitle>
              <AchievementDescription>years of Experience</AchievementDescription>
            </Achievement>
          </AchievementWrapper>
        </AchievementRow>
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
