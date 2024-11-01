
import styled from "styled-components";

export const ContainerCarousel = styled.div`
  max-width: 100%;
  
  .swiper-wrapper {
    width: 200px;
    margin: 0 40px;
}
  
  .carousel__img {
    width: 152px;
    height: 92px;
    border-radius: 8px;
  }

  .carousel_item {
    display: flex;
    flex-direction: column;
    width: 152px;
    height: 274px;
    padding: 21px 21px 0;
    margin: 22px 14px;
    box-shadow: 0px 0px 7px #00000012;
    border-radius: 8px;
  }

  .carousel__title {
    font-size: 14px;
    line-height: 16px;
    font-weight: 800;
    color: #267B80;
    margin: 8px 0 16px;
  }

  .carousel__text {
    font-size: 12px;
    line-height: 14.51px;
    font-weight: 400;
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: 28px; 
  }
`