import styled from "styled-components";

export const ContainerCarousel = styled.div`
  max-width: 100%;

  .swiper-wrapper {
    width: 200px;
    margin: 0 2px;
  }

  .carousel__img {
    width: 152px;
    height: 92px;
    border-radius: 8px;
  }

  .carousel_item {
    display: flex;
    flex-direction: column;
    width: 194px;
    height: 274px;
    padding: 21px 21px 0;
    margin: 22px 0;
    box-shadow: 0px 0px 7px #00000012;
    border-radius: 8px;
  }

  .carousel__title {
    font-size: 14px;
    font-family: ${({ theme }) => theme.fonts.lato};
    line-height: 16px;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.tertiary};
    margin: 8px 0 16px;
  }

  .carousel__text {
    font-size: 12px;
    line-height: 14.51px;
    font-weight: 400;
  }

  .container_icons img {
    width: 24px;
    height: 24px;
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: 28px;
  }

  @media (min-width: 768px) {
    .swiper-wrapper {
      width: 700px;
      margin: 0 auto;
    }

    .container_icons {
      margin: 8px 0 0;
    }

    .container_icons img {
      width: 31px;
      height: 31px;
    }

    .container_icons p,
    strong {
      font-size: 10px;
      margin: 0;
    }
  }

  @media (min-width: 949px) {
    .swiper-wrapper {
      width: 920px;
      margin: 0 auto;
    }

    .swiper-slide {
      max-width: 244px;
    }

    .carousel_item {
      width: 218px;
    }

    .carousel__img {
      width: 176px;
    }
  }
`;
