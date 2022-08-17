import React from 'react';
import { ReactComponent as Sun } from 'assets/svg/sun.svg';
import { ReactComponent as Moon } from 'assets/svg/moon.svg';
import {
  DarkText,
  LightText,
  SwitchHandle,
  ThemeSwitcherInput,
  ThemeSwitcherLabel,
} from './styles';

interface IThemeSwitcher {
  handleChange: () => void
}

const ThemeSwitcher = ({ handleChange }: IThemeSwitcher) => (
  <ThemeSwitcherLabel>
    <ThemeSwitcherInput type="checkbox" onChange={handleChange} />
    <SwitchHandle>
      <LightText title="Switch to Dark">
        <Moon />
      </LightText>
      <DarkText title="Switch to Light">
        <Sun />
      </DarkText>
    </SwitchHandle>
  </ThemeSwitcherLabel>
);

export default ThemeSwitcher;
