import React from 'react';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { SiMaterialdesign } from 'react-icons/si';
import { FaTeamspeak } from 'react-icons/fa';
import { RiTeamLine } from 'react-icons/ri';
import ProblemSolvingModal from 'Pages/Service/components/ProblemSolvingModal';

export const SERVICE_LIST = [
  {
    header: 'Problem-solving',
    img: <HiOutlineLightBulb />,
    modal: <ProblemSolvingModal />,
  },
  {
    header: 'Creativity',
    img: <SiMaterialdesign />,
    modal: <ProblemSolvingModal />,
  },
  {
    header: 'Communication',
    img: <FaTeamspeak />,
    modal: <ProblemSolvingModal />,
  },
  {
    header: 'Teamwork',
    img: <RiTeamLine />,
    modal: <ProblemSolvingModal />,
  },
];
