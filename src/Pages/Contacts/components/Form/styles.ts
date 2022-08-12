import styled from 'styled-components';

export const StyledForm = styled.form`
  background-color: ${({ theme }) => theme.colors.buttonHoverColor};
  padding: 30px 45px 55px 45px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.font};
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 15px 0;
`;

export const Textarea = styled.textarea`
  background-color: ${({ theme }) => theme.colors.transparent};
  width: 100%;
  height: 50px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: ${({ theme }) => theme.borders.navbarBorder};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.granite};
  font-weight: 500;
  resize: none;
  box-sizing: border-box;
  line-height: 1.4;
  padding: 10px 10px 10px 2px;
  
  &:focus {
    border-bottom-color: ${({ theme }) => theme.colors.midnight};
    outline: none;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
   
  & button {
    padding: 11px 33px;
  }
`;

export const ErrorMessage = styled.span`
  display: inline-block;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.red};
  padding: 5px 0 0 0;
  
  &:first-letter {
    text-transform: uppercase;
  }
`;
