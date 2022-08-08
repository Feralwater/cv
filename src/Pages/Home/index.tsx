import React from 'react';
import {
  HomeBlock,
  HomeButton,
  HomeDescription,
  HomeImage,
  HomeImageWrapper,
  HomeName,
  HomeWrapper,
  SocialMediaBlock,
  TypedText,
} from 'Pages/Home/styles';
import SocialMedia from 'Pages/Home/components/SocialMedia';
import { socialMediaLinks } from 'Pages/Home/components/SocialMedia/constants';
import useTypingAnimation from '../../hooks/useTypingAnimation';

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
        <SocialMediaBlock>
          {
            socialMediaLinks.map(({ icon, link }) => (
              <SocialMedia
                link={link}
                icon={icon}
              />
            ))
          }
        </SocialMediaBlock>
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
