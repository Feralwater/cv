import React from 'react';
import {
  ButtonWrapper,
  Column,
  DownloadButton,
  Popup,
  PopupHeader,
  PopupRow,
} from 'Pages/PersolnalInfo/styles';
import AboutList from 'Pages/PersolnalInfo/components/AboutList';
import { HiOutlineArrowDown } from 'react-icons/hi';
import AchievementList from 'Pages/PersolnalInfo/components/AchievementList';
import List from 'Pages/PersolnalInfo/components/List';
import { EDUCATION, EXPERIENCE } from 'Pages/PersolnalInfo/constants';

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
        <List list={EXPERIENCE} />
      </Column>
      <Column>
        <PopupHeader>Education</PopupHeader>
        <List list={EDUCATION} />
      </Column>
    </PopupRow>
  </Popup>
);

export default PersonalInfo;
