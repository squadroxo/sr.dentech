import styled from 'styled-components';

export const Container = styled.header`
  background-color: ${({theme}) => theme.colors.primary}; 
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

  @media screen and (min-width: 1280px) and (max-width: 1366px) {
    width: 100%;
    height: 6rem;

    .containerTitulo__img {
      width: 5rem;
      height: 4.5rem;
    }

    .containerLinks__lista {
      display: flex;
      gap: 3.8rem;
    }

    .containerLinks__lista__item {
      font-family: $fontDestaque;
      color: ${({theme}) => theme.colors.white100};
      font-weight: 700;
      font-size: 1rem;
      line-height: 1.5rem;
      text-decoration: none;
    }

    .containerHamburguer {
      display: none;
    }

  }

  @media screen and (min-width: 1366px){
    border-radius: 0 0 40px 40px;
    height: 115px;
  }
`;

