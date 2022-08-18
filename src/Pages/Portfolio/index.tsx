import React from 'react';
import { GithubLink, PortfolioBlock, SwiperWrapper } from 'Pages/Portfolio/styles';
import PortfolioSwiper from 'Pages/Portfolio/components/PortfolioSwiper';
import PageInfo from 'components/PageInfo';

const Portfolio = () => (
  <PortfolioBlock id="portfolio">
    <PageInfo header="Portfolio">
      Here is some of my open source projects. You can find code on my
      {' '}
      <GithubLink href="https://github.com/Feralwater">Github.</GithubLink>
    </PageInfo>
    <SwiperWrapper
      initial={{ opacity: 0, x: '-200' }}
      whileInView={{ opacity: 1, x: '0' }}
    >
      <PortfolioSwiper />
    </SwiperWrapper>
  </PortfolioBlock>
);

export default Portfolio;
