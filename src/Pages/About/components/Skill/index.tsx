import React from 'react';
import {
  Bar, Inner, ProgressInner, SkillLabel,
} from 'Pages/About/components/Skill/styles';

interface ISkill {
  skill: string;
  progress: number;
}

const Skill = ({ skill, progress }:ISkill) => (
  <div>
    <SkillLabel>{skill}</SkillLabel>
    <ProgressInner>
      <Bar>
        <Inner
          width={progress}
          initial={{ opacity: 0, x: '-100%' }}
          whileInView={{ opacity: 1, x: '0' }}
        />
      </Bar>
    </ProgressInner>
  </div>
);

export default Skill;
