import React from 'react';
import { SocialMediaItem, SocialMediaLink } from './styles';

interface ISocialMedia {
  icon: React.ReactNode;
  link: string;
}

const SocialMedia = ({ icon, link }:ISocialMedia) => (
  <SocialMediaItem>
    <SocialMediaLink href={link} target="_blank">
      {icon as React.ReactElement}
    </SocialMediaLink>
  </SocialMediaItem>
);

export default SocialMedia;
