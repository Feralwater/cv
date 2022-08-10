import React from 'react';
import { ContactCards, ContactsBlock, SubInfo } from 'Pages/Contacts/styles';
import { H3 } from 'topography';
import Paragraph from 'components/Paragraph/Paragraph';
import { CONTACTS } from 'Pages/Contacts/constants';
import ContactCard from 'Pages/Contacts/components/ContactCard';

const Contacts = () => (
  <ContactsBlock id="contacts">
    <H3>Contacts</H3>
    <SubInfo>
      <Paragraph
        text="Please contact me in any way that is convenient for you:
      email, phone, social media, or fill out the form below."
      />
    </SubInfo>
    <ContactCards>
      {CONTACTS.map(({ name, icon, contacts }) => (
        <ContactCard key={name} name={name} icon={icon} contacts={contacts} />))}
    </ContactCards>
  </ContactsBlock>
);

export default Contacts;
