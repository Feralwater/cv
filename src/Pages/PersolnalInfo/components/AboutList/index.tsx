import React from 'react';
import {
  AboutListWrapper, AboutItem, AboutTitle, AboutValue,
} from 'Pages/PersolnalInfo/components/AboutList/styles';
import { INFO } from 'Pages/PersolnalInfo/components/AboutList/constants';

const AboutList = () => (
  <AboutListWrapper>
    {INFO.map(({ title, value }) => (
      <AboutItem key={title}>
        <AboutTitle>{title}</AboutTitle>
        <AboutValue>{value}</AboutValue>
      </AboutItem>
    ))}
  </AboutListWrapper>
);

export default AboutList;
