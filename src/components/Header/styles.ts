import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.header`
  background-color: ${({ theme }) => theme.colors.primary}; 
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 100%;
  height: 60px;
  border-radius: 0px 0px 8px 8px;

  .containerTitulo {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .containerTitulo__img {
      width: 57px;
      height: 48px;
      margin-left: 31px;
  }

  .containerLinks {
    display: flex;
  }

  .containerLinks__lista {
    display: none;
  }

  .containerHamburguer {
    display: flex;
    margin-right: 40px;
  }

  @media screen and (min-width: 768px) {
    height: 105px;
    padding: 16px;
    border-radius: 0 0 30px 30px;
    justify-content: center;
    column-gap: 100px;

    .containerTitulo__img {
      width: 82px;
      height: 73px;
      margin: 0;
    }

    .containerLinks__lista {
      display: flex;
      column-gap: 48px;
    }
    .containerHamburguer {
      display: none;
    }
  }

  @media screen and (min-width: 950px) {
    column-gap: 300px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  font-family: ${({ theme }) => theme.fonts.highlight};
  color: ${({ theme }) => theme.colors.white100};
  font-weight: 700;
  font-size: 16px;
  text-decoration: underline transparent;
  transition: text-decoration 150ms ease-out;

  &.active,
  &:hover {
    text-decoration: ${({ theme }) => `underline 2px ${theme.colors.white100}`};
  }
`