import React from 'react';
import {
  AboutListWrapper, AboutItem, AboutTitle, AboutValue,
} from 'Pages/PersolnalInfo/components/AboutList/styles';
import { info } from 'Pages/PersolnalInfo/components/AboutList/constants';

const AboutList = () => (
  <AboutListWrapper>
    {info.map(({ title, value }) => (
      <AboutItem key={title}>
        <AboutTitle>{title}</AboutTitle>
        <AboutValue>{value}</AboutValue>
      </AboutItem>
    ))}
  </AboutListWrapper>
);

export default AboutList;
