import styled from 'styled-components';

export const SocialMediaItem = styled.li`
  margin: 0;
  display: inline-block;
  cursor: pointer;
`;

export const SocialMediaLink = styled.a`
  text-decoration: none;
  display: inline-block;
  line-height: 1;
  padding: 0 15px;
  transition: all .3s ease;
  
  & svg {
    color: ${({ theme }) => theme.colors.socialLinks};
    width: 22px;
    height: 22px;
  }

  &:hover {
    transform: translateY(-5px);
  }
`;
