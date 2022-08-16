import React from 'react';
import { PortfolioBlock } from 'Pages/Portfolio/styles';
import PortfolioSwiper from 'Pages/Portfolio/components/PortfolioSwiper';
import { H3 } from 'topography';
import Paragraph from 'components/Paragraph/Paragraph';

const Portfolio = () => (
  <PortfolioBlock id="portfolio">
    <H3>Portfolio</H3>
    <Paragraph text="Here is my open-source projects. You can find code on my github" />
    <PortfolioSwiper />
  </PortfolioBlock>
);

export default Portfolio;
