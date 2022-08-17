import React, { ReactNode } from 'react';
import {
  ListItem,
  ListWrapper,
  Icon,
  Description,
  Place,
  ItemTitle,
  Time,
  Header,
} from './styles';

interface IListItem {
  icon: ReactNode;
  time: string;
  title: string;
  place: string;
  description: string;
}

interface IList {
  list: IListItem[];
}

const List = ({ list }:IList) => (
  <ListWrapper>
    {
      list.map(({
        icon, time, title, place, description,
      }) => (
        <ListItem key={time + title}>
          <Icon>{icon}</Icon>
          <Time>{time}</Time>
          <Header>
            <ItemTitle>{title}</ItemTitle>
            <Place>{place}</Place>
          </Header>
          <Description>{description}</Description>
        </ListItem>
      ))
    }
  </ListWrapper>
);

export default List;
