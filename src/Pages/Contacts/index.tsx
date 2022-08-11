import React from 'react';
import {
  ContactCards, ContactsBlock, MailAuthor, MailMe, Map, SubInfo,
} from 'Pages/Contacts/styles';
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
    <MailAuthor>
      <MailMe>
        Form goes here
      </MailMe>
      <Map>
        <iframe
          width="100%"
          height="350"
          title="Google Maps"
          src="https://maps.google.com/maps?width=100%25&amp;height=350&amp;hl=en&amp;q=43b%20Tsintsadze%20street%20Georgia%20Tbilisi+(I%20am%20here)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.maps.ie/distance-area-calculator.html">measure area map</a>
        </iframe>
      </Map>
    </MailAuthor>
  </ContactsBlock>
);

export default Contacts;
