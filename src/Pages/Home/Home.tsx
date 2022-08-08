import React from 'react';
import useTypingAnimation from '../../hooks/useTypingAnimation';
import {
  HomeBlock,
  HomeButton,
  HomeDescription,
  HomeImage,
  HomeImageWrapper,
  HomeName,
  HomeWrapper,
  TypedText,
} from './Home.styles';

const Home = () => {
  const { typedText } = useTypingAnimation(['Web Developer', 'I`m building user interfaces']);

  return (
    <HomeBlock id="home">
      <HomeWrapper>
        <HomeImageWrapper>
          <HomeImage src="img/home_photo.jpg" alt="about author" />
        </HomeImageWrapper>
        <HomeName>Hello, I`m Buyakova Victoria</HomeName>
        <TypedText>{typedText}</TypedText>
        <HomeDescription>
          I`m a Front-end React Developer based In Poland,
          over 1 year of professional experience.
        </HomeDescription>
        <div>social links goes here</div>
        <HomeButton
          href="CV-Victoria-Buyakova.pdf"
          download
        >
          Download CV
        </HomeButton>
      </HomeWrapper>
    </HomeBlock>
  );
};

export default Home;
