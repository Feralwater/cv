import React, { ChangeEvent, MouseEvent } from 'react';
import Input from 'components/Input';
import Paragraph from 'components/Paragraph/Paragraph';
import Button from 'components/Button';
import emailjs from 'emailjs-com';
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
    const templateParams = {
      from_name: `${values.name} (${values.email})`,
      to_name: 'lineviktoriya@gmail.com',
      message: values.message,
    };

    emailjs
      .send('service_g4obudp', 'template_5lzsc9j', templateParams, '4WMR10Yh2KkK6A6vX')
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
          console.log('ERROR!', error.text);
        },
      );

    setValues({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <StyledForm>
      <div>
        <Paragraph text="I`m always open to discussing product" />
        <Title>Fell free to email me</Title>
      </div>
      <Input name="name" value={values.name} onChange={onChange} type="text" placeholder="Name *" />
      <Input name="email" value={values.email} onChange={onChange} type="text" placeholder="Email *" />
      <Textarea name="message" value={values.message} onChange={onChange} placeholder="Message *" />
      <ButtonContainer>
        <Button type="submit" onClick={handleSubmit}>Send</Button>
      </ButtonContainer>
    </StyledForm>
  );
};

export default Form;
