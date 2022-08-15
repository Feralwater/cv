import React from 'react';
import { ACHIEVEMENTS } from 'Pages/PersolnalInfo/components/AchievementList/constants';
import {
  Achievement,
  AchievementDescription,
  AchievementRow,
  AchievementTitle,
} from './styles';

const AchievementList = () => (
  <AchievementRow>
    {
      ACHIEVEMENTS.map(({ title, description }) => (
        <Achievement key={title}>
          <AchievementTitle>{title}</AchievementTitle>
          <AchievementDescription>{description}</AchievementDescription>
        </Achievement>
      ))
    }
  </AchievementRow>
);

export default AchievementList;
