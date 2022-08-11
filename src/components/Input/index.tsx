import React, { InputHTMLAttributes } from 'react';
import { StyledInput } from './styles';

type IInput = InputHTMLAttributes<HTMLInputElement>;

const Input = ({ ...props } :IInput) => <StyledInput {...props} />;

export default Input;
