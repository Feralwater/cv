import React from 'react';
import { ServiceBlock, ServiceInfo } from 'Pages/Service/styles';
import { H3 } from 'topography';
import Paragraph from 'components/Paragraph/Paragraph';
import ServiceList from 'Pages/Service/components/ServiceList';

const Service = () => (
  <ServiceBlock id="service">
    <ServiceInfo>
      <H3>What I do</H3>
      <Paragraph>
        I create the front-end of websites and web applications - that is,
        the part that users see and interact with.
        When you visit the site, the design elements
        you see were created by the front-end developer.
      </Paragraph>
    </ServiceInfo>
    <ServiceList />
  </ServiceBlock>
);

export default Service;
