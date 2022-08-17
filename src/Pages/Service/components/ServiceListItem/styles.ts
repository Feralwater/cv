import styled from 'styled-components';

export const Inner = styled.div`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.granite};
  font-size: 18px;
  display: inline-block;
  position: relative;
`;

export const ItemInnerImg = styled.div`
  width: 50px;
  height: 50px;
  margin-bottom: 25px;
  font-size: 50px;
`;

export const ItemInnerHeader = styled.h3`
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 20px;
`;

export const RightArrow = styled.span`
  position: absolute;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.granite};
  transition: all .7s ease;
  display: inline-block;
  width: 10px;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 14px;

  &:before {
    content: "";
    width: 6px;
    transform: rotate(45deg);
    right: 0;
    top: -2px;
    position: absolute;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.granite};
    transition: all .7s ease;
  }

  &:after {
    position: absolute;
    content: "";
    width: 6px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.granite};
    transform: rotate(-45deg);
    right: 0;
    bottom: -2px;
    transition: all .7s ease;
  }
}
`;

export const ItemInner = styled.li`
  background-color: ${({ theme }) => theme.colors.sidebarBackground};
  color: ${({ theme }) => theme.colors.font};
  padding: 50px 40px 45px 50px;
  border-radius: 6px;
  box-sizing: border-box;
  flex: 0 0 calc(25% - 30px);
  cursor: pointer;
  word-wrap: break-word;
  width: calc(25% - 30px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};

    & ${Inner} {
      color: ${({ theme }) => theme.colors.white};
    }

    & ${RightArrow} {
      background-color: ${({ theme }) => theme.colors.white};
      width: 30px;

      &:before,
      &:after {
        background-color: ${({ theme }) => theme.colors.white};
      }
    }
  }
`;
