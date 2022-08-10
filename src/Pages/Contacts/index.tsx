import React from 'react';
import { ContactsBlock } from 'Pages/Contacts/styles';
import { H3 } from 'topography';
import Paragraph from 'components/Paragraph/Paragraph';

const Contacts = () => (
  <ContactsBlock id="contacts">
    <H3>Contacts</H3>
    <Paragraph
      text="Please contact me in any way that is convenient for you:
      email, phone, social media, or fill out the form below."
    />

  </ContactsBlock>
);

export default Contacts;
