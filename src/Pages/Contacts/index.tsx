import React from 'react';
import {
  ContactCards, ContactsBlock, MailAuthor, MailMe,
} from 'Pages/Contacts/styles';
import { CONTACTS } from 'Pages/Contacts/constants';
import ContactCard from 'Pages/Contacts/components/ContactCard';
import GoogleMap from 'Pages/Contacts/components/GoogleMap';
import Form from 'Pages/Contacts/components/Form';
import PageInfo from 'components/PageInfo';

const Contacts = () => (
  <ContactsBlock id="contacts">
    <PageInfo header="Contacts">
      Please contact me in any way that is convenient for you:
      email, phone, social media, or fill out the form below.
    </PageInfo>
    <ContactCards>
      {CONTACTS.map(({ name, icon, contacts }) => (
        <ContactCard key={name} name={name} icon={icon} contacts={contacts} />))}
    </ContactCards>
    <MailAuthor>
      <MailMe
        initial={{ opacity: 0, x: '-100%' }}
        whileInView={{ opacity: 1, x: '0' }}
      >
        <Form />
      </MailMe>
      <GoogleMap />
    </MailAuthor>
  </ContactsBlock>
);

export default Contacts;
