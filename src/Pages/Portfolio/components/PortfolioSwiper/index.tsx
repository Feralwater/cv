import React from 'react';
import { SwiperSlide } from 'swiper/react';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css';
import { Navigation } from 'swiper';
import { ProjectLink, StyledSwiper } from './styles';
import { PORTFOLIO } from './constants';

export default function PortfolioSwiper() {
  return (
    <StyledSwiper
      slidesPerView={3}
      spaceBetween={30}
      slidesPerGroup={2}
      loop
      loopFillGroupWithBlank
      pagination={{
        clickable: true,
      }}
      navigation
      modules={[Navigation]}
      className="mySwiper"
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
