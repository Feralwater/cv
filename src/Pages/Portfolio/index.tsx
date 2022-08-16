import React from 'react';
import { PortfolioBlock } from 'Pages/Portfolio/styles';
import PortfolioSwiper from 'Pages/Portfolio/components/PortfolioSwiper';
import { H3 } from 'topography';
import Paragraph from 'components/Paragraph/Paragraph';

const Portfolio = () => (
  <PortfolioBlock id="portfolio">
    <div>
      <H3>Portfolio</H3>
      <Paragraph>
        Here is my open-source projects. You can find code on my
        <a href="https://github.com/Feralwater">github</a>
      </Paragraph>
    </div>
    <div>
      <PortfolioSwiper />
    </div>
  </PortfolioBlock>
);

export default Portfolio;
