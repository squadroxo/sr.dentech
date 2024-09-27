import styled from "styled-components";

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Kalam:wght@300;400;700&display=swap');
  width: 65%;
  height: auto;
  background-color: #267B80;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border-radius: 0.6rem;
  margin: 3rem auto;
  padding: 1rem 2rem;

  .img {
  }

  .text {
    font-weight: 700;
    font-size: 0.9rem;
    line-height: 1.4rem;
    text-align: center;
    font-family: "Kalam", cursive;
    color: white;
    width: 90%;
  }

  .strutureDesktop {
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
  }
`;
