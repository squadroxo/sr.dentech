import styled from "styled-components";

export const Line = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.line};
  margin: 0 0 40px 0;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Container = styled.div`
  margin: 20px 40px;

  .container__tag {
    position: relative;
    width: 91px;
    height: 18px;
    background-color: ${({ theme }) => theme.colors.light_blue};
    font-size: 8px;
    line-height: 9.67px;
    color: ${({ theme }) => theme.colors.text};
    text-transform: uppercase;
    text-align: center;
    align-content: center;
    border-radius: 80px;
  }

  .container__title {
    margin-top: 22px;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: ${({ theme }) => theme.colors.secondary};
  }

  .container__card__content {
    margin-top: 22px;
    height: 298px;
    width: 295px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 0px 7px #00000012;
    border-radius: 8px;
  }

  .container__card__title {
    font-family: ${({ theme }) => theme.fonts.lato};
    font-size: 14px;
    font-weight: 800;
    line-height: 16.8px;
    color: ${({ theme }) => theme.colors.tertiary};
    margin: 8px 0;
  }

  .container__card_text {
    font-family: ${({ theme }) => theme.fonts.lato};
    font-size: 12px;
    font-weight: 400;
    height: 66px;
    line-height: 16px;
    color: ${({ theme }) => theme.colors.text};
    text-align: justify;

    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .container_icons {
    display: flex;
    margin-top: 12px;
    align-items: center;
  }

  .container__card__icon {
    width: 24px;
    height: 24px;
  }

  .container_icons_text {
    font-size: 10px;
    font-weight: 400;
    line-height: 12.09px;
    color: ${({ theme }) => theme.colors.tertiary};
    align-content: center;
    margin-left: 6px;

    span {
      font-weight: 700;
    }
  }

  .container__button {
    display: flex;
    justify-content: center;
  }

  @media (min-width: 768px) and (max-width: 949px) {
    .container__titles {
      width: 740px;
      margin: 16px auto 32px;
    }

    .container__title {
      font-size: 29px;
      line-height: 34.8px;
    }

    .container__tag {
      width: 128px;
      height: 31px;
      font-size: 12px;
      line-height: 14.51px;
      font-weight: 400;
    }

    .container__card__content {
      display: flex;
      flex-direction: row;
      gap: 38px;
      margin: 0 auto;
      width: 740px;
      height: 451px;
    }

    .container__card__img {
      width: 422px;
      height: 315px;
    }

    .container__card__title {
      font-family: ${({ theme }) => theme.fonts.primary};
      color: ${({ theme }) => theme.colors.secondary};
      font-size: 38px;
      font-weight: 700;
      line-height: 45.6px;
      letter-spacing: -1px;
    }

    .container__card_text {
      font-family: ${({ theme }) => theme.fonts.primary};
      font-size: 16px;
      font-weight: 400;
      height: 76px;
      line-height: 19.2px;
      text-align: left;
      margin-top: 16px;
    }

    .container_icons {
      margin-top: 38px;
      width: 237px;
      height: 48px;
      gap: 12px;
    }

    .container__card__icon {
      width: 48px;
      height: 48px;
    }

    .container_icons_text {
      font-size: 16px;
      font-weight: 400;
      line-height: 19.34px;

      span {
        font-weight: 700;
      }
    }
  }

  @media (min-width: 950px) {
    width: 100%;

    .container__titles {
      width: 920px;
      margin: 16px auto 32px;
    }

    .container__title {
      font-size: 29px;
      line-height: 34.8px;
    }

    .container__tag {
      width: 128px;
      height: 31px;
      font-size: 12px;
      line-height: 14.51px;
      font-weight: 400;
    }

    .container__card__content {
      display: flex;
      flex-direction: row;
      gap: 38px;
      margin: 0 auto;
      width: 920px;
      height: 451px;
    }

    .container__card__img {
      width: 522px;
      height: 415px;
    }

    .container__card__title {
      font-family: ${({ theme }) => theme.fonts.primary};
      color: ${({ theme }) => theme.colors.secondary};
      font-size: 38px;
      font-weight: 700;
      line-height: 45.6px;
      letter-spacing: -1px;
    }

    .container__card_text {
      font-family: ${({ theme }) => theme.fonts.primary};
      font-size: 16px;
      font-weight: 400;
      height: 76px;
      line-height: 19.2px;
      text-align: left;
      margin-top: 16px;
    }

    .container_icons {
      margin-top: 38px;
      width: 237px;
      height: 48px;
      gap: 12px;
    }

    .container__card__icon {
      width: 48px;
      height: 48px;
    }

    .container_icons_text {
      font-size: 16px;
      font-weight: 400;
      line-height: 19.34px;

      span {
        font-weight: 700;
      }
    }
  }
`;
