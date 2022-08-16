import styled from 'styled-components';
import { Swiper } from 'swiper/react';
import arrow from 'assets/svg/leftArrow.svg';

export const StyledSwiper = styled(Swiper)`
  & div.swiper-button-prev,
  div.swiper-button-next {
    width: 65px;
    height: 65px;
    border: ${({ theme }) => theme.borders.graniteBorder};
    border-radius: 50%;
    z-index: 10;
    top: 50%;
    background-color: ${({ theme }) => theme.colors.onyx};
    position: absolute;
    transform: translateY(-50%);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    &:after {
      display: block;
      filter: invert(1);
      content: url(${arrow});
    }
  }

  & div.swiper-button-next {
    right: 0;
  }

  & div.swiper-button-prev {

    &:after {
      transform: rotate(-180deg);
    }
  }

`;

interface IProjectLink {
  description: string;
}

export const ProjectLink = styled.a<IProjectLink>`
  width: 100%;
  float: left;
  overflow: hidden;
  text-decoration: none;
  height: 350px;
  border-radius: 10px;

  &:after {
    content: '';
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.onyx};
    position: absolute;
    top: 0;
    left: 0;
    opacity: .7;
    border-radius: 10px;
    box-sizing: border-box;
    text-align: center;
    font-size: 16px;
  }

  & img {
    filter: grayscale(85%);
    object-fit: cover;
    width: 100%;
    height: 100%;
    transition: all 0.4s ease-in-out;
  }

  &:hover {
    & > img {
      transform: scale(1.2);
    }
    &:after {
      content: '${(props) => props.description}';
      color: ${({ theme }) => theme.colors.paragraph};
      padding: 0 80px;
    }
  }
`;
