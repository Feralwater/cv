import React, { ReactNode } from 'react';
import Paragraph from 'components/Paragraph';
import { H3, Info } from './styles';

interface IPageInfo {
  header: string;
  children?: ReactNode;
}

const PageInfo = ({ header, children }:IPageInfo) => (
  <Info>
    <H3>{header}</H3>
    {children && (
    <Paragraph>
      {children}
    </Paragraph>
    )}
  </Info>
);

export default PageInfo;
