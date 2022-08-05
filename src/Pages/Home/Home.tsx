import React from 'react';
import useTypingAnimation from '../../hooks/useTypingAnimation';
import {
  BlinkingCursor,
  HomeBlock, HomeButton,
  HomeDescription,
  HomeImage,
  HomeName,
  HomeWrapper,
} from './Home.styles';

const Home = () => {
  const { typedText } = useTypingAnimation(['Web Developer']);

  return (
    <HomeBlock id="home">
      <HomeWrapper>
        <HomeImage src="../../img/home_photo.jpg" alt="" />
        <HomeName>Hello, I`m Buyakova Victoria</HomeName>
        <BlinkingCursor>{typedText}</BlinkingCursor>
        <HomeDescription>
          I`m a Front-end React Developer based In Poland,
          over 1 year of professional experience.
        </HomeDescription>
        <div>social links goes here</div>
        <HomeButton href="#">Download CV</HomeButton>
      </HomeWrapper>
    </HomeBlock>
  );
};

export default Home;
