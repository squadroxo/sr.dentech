
import styled from "styled-components";

export const Container = styled.div`
  margin: 20px 40px;

  .container__tag {
    position: relative;
    width: 91px;
    height: 18px;
    background-color: ${({theme}) => theme.colors.azul_claro};
    font-size: 8px;
    line-height: 9.67px;
    color: ${({theme}) => theme.colors.black100};
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
    color: ${({theme}) => theme.colors.secondary};
  }

  .container__card__content {
    margin-top: 22px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 0px 7px #00000012;
    border-radius: 8px;
  }

  .container__card__title {
    font-size: 14px;
    font-weight: 800;
    line-height: 16.8px;
    color: ${({theme}) => theme.colors.tertiary};
    margin: 8px 0;
  }

  .container__card_text {
    font-size: 12px;
    font-weight: 400;
    line-height: 14.4px;
    color: ${({theme}) => theme.colors.text};
    text-align: justify;
  }

  .container_icons {
    display: flex;
    margin-top: 12px;
  }

  .container_icons_text {
    font-size: 10px;
    font-weight: 400;
    line-height: 12.09px;
    color: ${({theme}) => theme.colors.tertiary};
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
`;
