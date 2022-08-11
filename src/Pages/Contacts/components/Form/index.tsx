import React, { ChangeEvent, MouseEvent } from 'react';
import Input from 'components/Input';
import Paragraph from 'components/Paragraph/Paragraph';
import Button from 'components/Button';
import {
  ButtonContainer, StyledForm, Textarea, Title,
} from './styles';

const Form = () => {
  const [values, setValues] = React.useState({
    name: '',
    email: '',
    message: '',
  });
  const onChange = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <StyledForm action="/">
      <div>
        <Paragraph text="I`m always open to discussing product" />
        <Title>Fell free to email me</Title>
      </div>
      <Input name="name" onChange={onChange} type="text" placeholder="Name *" />
      <Input name="email" onChange={onChange} type="text" placeholder="Email *" />
      <Textarea name="message" onChange={onChange} placeholder="Message *" />
      <ButtonContainer>
        <Button type="submit" onClick={handleSubmit}>Send</Button>
      </ButtonContainer>
    </StyledForm>
  );
};

export default Form;
