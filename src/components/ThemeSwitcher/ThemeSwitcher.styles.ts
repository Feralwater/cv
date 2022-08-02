import styled from 'styled-components';

export const ThemeSwitcherLabel = styled.label`
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
  background-color: rgba(0,0,0,.1);
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
  color: #000;
`;

export const DarkText = styled.i`
  position: absolute;
  width: 22px;
  height: 22px;
  transition: .3s;
  visibility: hidden;
  opacity: 0;
  color: #fff;
`;

export const SwitcherIcon = styled.svg`
  width: 100%;
  height: 100%;
`;
