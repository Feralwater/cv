import React from 'react';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper';
import { ProjectLink, StyledSwiper } from './styles';
import { PORTFOLIO } from './constants';

export default function PortfolioSwiper() {
  return (
    <StyledSwiper
      spaceBetween={30}
      slidesPerGroup={2}
      loop
      loopFillGroupWithBlank
      navigation
      modules={[Navigation]}
      breakpoints={{
        960: {
          slidesPerView: 3,
        },
        540: {
          slidesPerView: 2,
        },
        0: {
          slidesPerView: 1,
        },
      }}
    >
      {
            PORTFOLIO.map(({
              id, alt, description, img, link,
            }) => (
              <SwiperSlide key={id}>
                <ProjectLink href={link} description={description}>
                  <img src={img} alt={alt} />
                </ProjectLink>
              </SwiperSlide>
            ))
          }
    </StyledSwiper>
  );
}
