import React, { ReactNode } from 'react';
import {
  Card,
  CardName,
  Contact,
  Contacts,
  Icon,
  Info,
} from 'Pages/Contacts/components/ContactCard/styles';

interface IContactCard {
  name: string;
  contacts: string[];
  icon: ReactNode;
}

const ContactCard = ({ name, contacts, icon }:IContactCard) => (
  <Card>
    <Icon>{icon}</Icon>
    <Info>
      <CardName>{name}</CardName>
      <Contacts>
        {contacts.map((item) => (
          <Contact key={item}>{item}</Contact>
        ))}
      </Contacts>
    </Info>
  </Card>
);

export default ContactCard;
