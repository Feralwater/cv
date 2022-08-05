import styled from 'styled-components';

export const ThemeSwitcherLabel = styled.label`
  background-color: ${({ theme }) => theme.colors.pageBackground};
  cursor: pointer;
  position: fixed;
  left: 250px;
  top: 31px;
  z-index: 100;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ThemeSwitcherInput = styled.input`
  background-color: initial;
  cursor: pointer;
  appearance: auto;
  box-sizing: border-box;
  margin: 3px 3px 3px 4px;
  padding: initial;
  border: initial;
  display: none;
`;

export const SwitchHandle = styled.div`
  border-radius: 50%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .3s ease-in-out;
`;

export const LightText = styled.i`
  position: absolute;
  width: 22px;
  height: 22px;
  transition: .3s;
  opacity: ${({ theme }) => (theme.theme === 'light' ? 1 : 0)};
`;

export const DarkText = styled.i`
  position: absolute;
  width: 22px;
  height: 22px;
  transition: .3s;
  opacity: ${({ theme }) => (theme.theme === 'dark' ? 1 : 0)};
`;

export const SwitcherIcon = styled.svg`
  width: 100%;
  height: 100%;
  fill: ${({ theme }) => theme.colors.themeSwitcherColor};
`;
