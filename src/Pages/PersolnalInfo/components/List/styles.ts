import styled from 'styled-components';

export const ListWrapper = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const ListItem = styled.li`
  position: relative;
  padding: 0 20px 0 60px;
  margin: 0 0 50px;
  
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 20px;
    bottom: 0;
    border-left: ${({ theme }) => theme.borders.listBorder};
  }
`;

export const Icon = styled.div`
  width: 40px;
  height: 40px;
  position: absolute;
  left: 0;
  right: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.rhino};
  z-index: 1;
  font-size: 1.3rem;
`;

export const Time = styled.span`
  color: ${({ theme }) => theme.colors.time};
  font-size: 12px;
  padding: 10px 15px;
  display: inline-block;
  margin-bottom: 12px;
  border-radius: 20px;
  font-weight: 600;
  background-color: ${({ theme }) => theme.colors.timeBackground};
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
`;

export const ItemTitle = styled.h5`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.popupItem};
  font-weight: 600;
  line-height: 1.5;
`;

export const Place = styled.h5`
  opacity: .8;
  font-weight: 600;
  font-size: 15px;
  position: relative;
  padding-left: 26px;
  color: ${({ theme }) => theme.colors.popupItem};
  
  &:before {
    position: absolute;
    content: "";
    width: 10px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.symbol};
    left: 7px;
    top: 9px;
    opacity: .8;
  }
`;

export const Description = styled.p`
  margin: 0;
  font-size: 15px;
  line-height: 27px;
  color: ${({ theme }) => theme.colors.paragraph};
`;
