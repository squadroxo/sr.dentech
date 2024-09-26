import styled from "styled-components";

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Kalam:wght@300;400;700&display=swap');
  margin: 18px 39px 24px 39px;

  .subtitle {
    font-weight: 700;
    font-family: "Kalam", cursive;
    font-size: 26px;
    line-height: 33px;
    color: #21C9D3;
  }

  .desc {
    font-size: 12px;
    line-height: 16px;
    margin: 9px 0 24px 0;
  }

  .line {
    width: 17rem;
    height: 1.3rem;
  }

  @media screen and (min-width: 1280px) and (max-width: 1366px) {
    margin: 3rem 11rem;

    .subtitle {
      font-size: 2rem;
      line-height: 3.5rem;
    }

    .desc {
      font-size: 1rem;
      line-height: 1.2rem;
    }

    .line {
      width: 35rem;
      height: 2em;
      margin-left: 15rem;
    }
  }

  @media screen and (min-width: 1366px) and (max-width: 1920px) {
    margin: 4rem 31rem 3rem 20rem;
    gap: 1rem;

    .subtitle {
      font-size: 3rem;
      line-height: 5rem;
    }

    .desc {
      font-size: 1.25rem;
      line-height: 1.5rem;
    }

    .line {
      width: 38rem;
      height: 2rem;
      margin-left: 18rem;
    }
  }
`;
