import React from 'react';
import { AboutAuthor } from 'components/Paragraph/styles';

interface IParagraph {
  text: string;
}

const Paragraph = ({ text }:IParagraph) => (
  <AboutAuthor>
    {text}
  </AboutAuthor>
);

export default Paragraph;
