import React, { ChangeEvent, MouseEvent, useState } from 'react';
import Input from 'components/Input';
import Paragraph from 'components/Paragraph/Paragraph';
import Button from 'components/Button';
import emailjs from 'emailjs-com';
import {
  ErrorMessage, ButtonContainer, StyledForm, Textarea, Title,
} from './styles';

const Form = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false,
  });

  const onChange = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setTouched({ ...touched, [e.target.name]: true });
  };

  const handleSubmit = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();

    if (!values.name || !values.email || !values.message) {
      setTouched({
        ...touched, name: true, email: true, message: true,
      });
      return;
    }

    const templateParams = {
      from_name: `${values.name} (${values.email})`,
      to_name: 'lineviktoriya@gmail.com',
      message: values.message,
    };

    emailjs
      .send('service_g4obudp', 'template_5lzsc9j', templateParams, '4WMR10Yh2KkK6A6vX')
      .then(
        () => {
          alert('Your message has been sent!');
        },
        () => {
          alert('Sorry, something went wrong. Please try again later.');
        },
      );

    setValues({
      name: '',
      email: '',
      message: '',
    });
    setTouched({
      name: false,
      email: false,
      message: false,
    });
  };

  return (
    <StyledForm>
      <div>
        <Paragraph>I`m always open to discussing product</Paragraph>
        <Title>Fell free to email me</Title>
      </div>
      <div>
        <Input
          required
          name="name"
          value={values.name}
          onChange={onChange}
          type="text"
          placeholder="Name *"
        />
        {touched.name && !values.name && <ErrorMessage>name is required</ErrorMessage>}
      </div>
      <div>
        <Input
          required
          name="email"
          value={values.email}
          onChange={onChange}
          type="text"
          placeholder="Email *"
        />
        {touched.email && !values.email && <ErrorMessage>email is required</ErrorMessage>}
      </div>
      <div>
        <Textarea
          required
          name="message"
          value={values.message}
          onChange={onChange}
          placeholder="Message *"
        />
        {touched.message && !values.message && <ErrorMessage>message is required</ErrorMessage>}
      </div>
      <ButtonContainer>
        <Button type="submit" onClick={handleSubmit}>Send</Button>
      </ButtonContainer>
    </StyledForm>
  );
};

export default Form;
