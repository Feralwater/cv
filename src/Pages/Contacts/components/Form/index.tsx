import React, { MouseEvent } from 'react';
import Input from 'components/Input';
import Paragraph from 'components/Paragraph/Paragraph';
import Button from 'components/Button';
import { StyledForm, Textarea, Title } from './styles';

const Form = () => {
  const handleSubmit = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
  };

  return (
    <StyledForm action="/">
      <Paragraph text="I`m always open to discussing product" />
      <Title>Fell free to email me</Title>
      <Input type="text" placeholder="Name *" />
      <Input type="text" placeholder="Email *" />
      <Textarea placeholder="Message *" />
      <Button type="submit" onClick={handleSubmit}>Send</Button>
    </StyledForm>
  );
};

export default Form;
