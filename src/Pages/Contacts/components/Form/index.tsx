import React from 'react';
import Input from 'components/Input';
import Paragraph from 'components/Paragraph/Paragraph';
import { StyledForm, Title } from './styles';

const Form = () => (
  <StyledForm action="/">
    <Paragraph text="I`m always open to discussing product" />
    <Title>Fell free to email me</Title>
    <Input type="text" placeholder="Name *" />
    <Input type="text" placeholder="Email *" />
    <textarea placeholder="Message *" />
    <button type="submit">Send</button>
  </StyledForm>
);

export default Form;
