import React from 'react';
import Paragraph from 'components/Paragraph';
import { Banner, BannerWrapper, ModalTitle } from 'Pages/Service/components/SkillModal/styles';

interface ISkillModal {
  banner: string;
  bannerDescription: string;
  title: string;
  paragraph1: string;
  paragraph2: string;
}

const SkillModal = ({
  banner, bannerDescription, title, paragraph1, paragraph2,
}:ISkillModal) => (
  <>
    <BannerWrapper>
      <Banner src={banner} alt={bannerDescription} />
    </BannerWrapper>
    <ModalTitle>{title}</ModalTitle>
    <Paragraph>{paragraph1}</Paragraph>
    <Paragraph>{paragraph2}</Paragraph>
  </>
);

export default SkillModal;
