import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';

import { dataCarousel } from "../../types/dataSections";
import * as Styles from "./style";

const Carousel: React.FC<{ items: dataCarousel[] }> = ({ items }) => {
  return (
    <Styles.ContainerCarousel>
      <Swiper
        spaceBetween={0}
        slidesPerView={1} 
        navigation
        modules={[Navigation]}
        loop={true}
      >
        {items.map((item) => {
          return (
          <SwiperSlide key={item.id}>
            <div className="carousel_item">
              <img className="carousel__img" src={item.photoCarousel} alt={item.alt} />
              <h3 className="carousel__title">{item.titleCarousel}</h3>
              <p className="carousel__text">{item.textCarousel}</p>
              <div className="container_icons">
                <img src={item.icon} alt="Ícone de Dente" />
                <p className="container_icons_text">
                  Postado por <span>{item.postedBy}</span>
                </p>
              </div>
            </div>
          </SwiperSlide>
        )})}
      </Swiper>
    </Styles.ContainerCarousel>
  );
};

export default Carousel;
