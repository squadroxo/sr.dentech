import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  width: 100%;
  height: 88px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin: 40px auto 0;
  border-radius: 7.18px;
  padding: 12px 16px;

  .img {
    width: 21.53px;
    height: 21.53px;
  }

  .text {
    font-family: ${({ theme }) => theme.fonts.highlight};
    color: ${({ theme }) => theme.colors.white100};
    font-weight: 700;
    font-size: 14px;
    line-height: 15.79px;
    text-align: center;
  }

  // TODO: Estilizar o desktop posteriormente
  /* .strutureDesktop {
    display: none;
  }

  @media screen and (min-width: 1280px) and (max-width: 1366px) {
    height: 9rem;

    .strutureDesktop {
      display: flex;
      gap: 5rem;
    }

    .img {
      display: none;
    }

    .text {
      display: none;
    }

    .textDesktop {
      font-weight: 700;
      font-size: 1.5rem;
      line-height: 2rem;
      text-align: center;
      font-family: "Kalam", cursive;
      color: white;
      width: 90%;
    }

    .imgDesktop {
      width: 2.5rem;
      height: 2.3rem;
    }
  }

  @media screen and (min-width: 1366px) and (max-width: 1920px) {
    width: 57%;
    height: 10rem;
    margin: 4rem auto;

    .strutureDesktop {
      display: flex;
      gap: 3rem;
    }

    .textDesktop {
      font-weight: 700;
      font-size: 2rem;
      line-height: 2rem;
      text-align: center;
      font-family: "Kalam", cursive;
      color: white;
      width: 90%;
    }

    .img {
      display: none;
    }

    .text {
      display: none;
    }

    .imgDesktop {
      width: 3rem;
      height: 2.75rem;
    }
  } */
`;
