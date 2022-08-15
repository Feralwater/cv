import React from 'react';
import {
  AboutItem,
  AboutList,
  AboutTitle,
  AboutValue,
  Achievement, AchievementDescription, AchievementRow,
  AchievementTitle,
  AchievementWrapper,
  ButtonWrapper,
  Column, ExperienceItem, ExperienceList, Icon, JobDescription, JobPlace, JobTitle,
  Popup,
  PopupHeader,
  PopupRow, Time,
} from 'Pages/PersolnalInfo/styles';
import { HomeButton } from 'Pages/Home/styles';
import { FiBookOpen, FiBriefcase } from 'react-icons/fi';

const PersonalInfo = () => (
  <Popup>
    <PopupRow>
      <Column>
        <PopupHeader>Personal Info</PopupHeader>
        <AboutList>
          <AboutItem>
            <AboutTitle>First name:</AboutTitle>
            <AboutValue>Victoria</AboutValue>
          </AboutItem>
          <AboutItem>
            <AboutTitle>Last name:</AboutTitle>
            <AboutValue>Buyakova</AboutValue>
          </AboutItem>
          <AboutItem>
            <AboutTitle>Age:</AboutTitle>
            <AboutValue>29 Years</AboutValue>
          </AboutItem>
          <AboutItem>
            <AboutTitle>Nationality:</AboutTitle>
            <AboutValue>Belarus</AboutValue>
          </AboutItem>
          <AboutItem>
            <AboutTitle>Work format:</AboutTitle>
            <AboutValue>?</AboutValue>
          </AboutItem>
          <AboutItem>
            <AboutTitle>Address:</AboutTitle>
            <AboutValue>Tbilisi</AboutValue>
          </AboutItem>
          <AboutItem>
            <AboutTitle>Phone:</AboutTitle>
            <AboutValue>+995591920551</AboutValue>
          </AboutItem>
          <AboutItem>
            <AboutTitle>Email:</AboutTitle>
            <AboutValue>lineviktoriya@gmail.com</AboutValue>
          </AboutItem>
          <AboutItem>
            <AboutTitle>Skype:</AboutTitle>
            <AboutValue>hcghcb</AboutValue>
          </AboutItem>
          <AboutItem>
            <AboutTitle>Languages:</AboutTitle>
            <AboutValue>English, Russian, Polish</AboutValue>
          </AboutItem>
        </AboutList>
        <ButtonWrapper>
          <HomeButton
            href="CV-Victoria-Buyakova.pdf"
            download
          >
            Download CV
          </HomeButton>
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
