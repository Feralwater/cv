import React from 'react';
import { SERVICE_LIST } from 'Pages/Service/components/ServiceList/constants';
import { List } from './styles';
import ServiceListItem from '../ServiceListItem';

const ServiceList = () => (
  <List>
    {SERVICE_LIST.map(({ img, header, modal }) => (
      <ServiceListItem img={img} header={header} key={header} modal={modal} />
    ))}
  </List>
);

export default ServiceList;
