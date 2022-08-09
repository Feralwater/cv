import React from 'react';
import { ProgressInner, SkillLabel } from 'Pages/About/components/Skill/styles';

interface ISkill {
  skill: string;
}

const Skill = ({ skill }:ISkill) => (
  <div>
    <SkillLabel>{skill}</SkillLabel>
    <ProgressInner><div /></ProgressInner>
  </div>
);

export default Skill;
