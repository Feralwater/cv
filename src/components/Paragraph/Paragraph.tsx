import React, { ReactNode } from 'react';
import { StyledParagraph } from 'components/Paragraph/styles';

interface IParagraph {
  children: ReactNode;
}

const Paragraph = ({ children }:IParagraph) => (
  <StyledParagraph>
    {children}
  </StyledParagraph>
);

export default Paragraph;
