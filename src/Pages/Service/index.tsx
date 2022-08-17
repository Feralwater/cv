import React from 'react';
import ServiceList from 'Pages/Service/components/ServiceList';
import PageInfo from 'components/PageInfo';
import { ServiceBlock } from './styles';

const Service = () => (
  <ServiceBlock id="service">
    <PageInfo header="What I do">
      I create the front-end of websites and web applications - that is,
      the part that users see and interact with.
      When you visit the site, the design elements
      you see were created by the front-end developer.
    </PageInfo>
    <ServiceList />
  </ServiceBlock>
);

export default Service;
