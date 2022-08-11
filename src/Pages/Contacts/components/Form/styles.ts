import styled from 'styled-components';

export const StyledForm = styled.form`
  background-color: ${({ theme }) => theme.colors.buttonHoverColor};
  padding: 50px 45px 55px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: 35px;
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

  &:focus {
    border-bottom-color: ${({ theme }) => theme.colors.midnight};
    outline: none;
  }
`;
