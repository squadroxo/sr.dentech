import * as Styles from "./style";
import dataSection from "../../data/dataSection";
import { dataSectionProps } from "../../types/dataSections";
import Carousel from "../Carousel";
import Button from "../Button";
import { useEffect, useState } from "react";

interface SectionProps extends dataSectionProps {
  index: number;
}

const Section: React.FC<SectionProps> = ({ titleSection, tag, photoMobile, photoDesktop, alt, subtitle, text, postedBy, icon, carousel, index }) => {
  const [imageSrc, setImageSrc] = useState(photoMobile);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setImageSrc(photoDesktop);
      } else {
        setImageSrc(photoMobile);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [photoMobile, photoDesktop]);

  const isEven = index % 2 === 0;

  return (
    <Styles.Container>
      <Styles.Line />
      <div className="container__titles">
        <div className="container__tag">{tag}</div>
        <h2 className="container__title">{titleSection}</h2>
      </div>
      <div className={`container__card__content ${isEven ? "image-left" : "image-right"}`}>
        {/* Renderiza a imagem antes ou depois do conteúdo de texto com base no índice */}
        {isEven ? (
          <>
            <img className="container__card__img" src={imageSrc} alt={alt} />
            <div>
              <h3 className="container__card__title">{subtitle}</h3>
              <p className="container__card_text">{text}</p>
              <div className="container_icons">
                <img src={icon} alt="Ícone de Dente" className="container__card__icon" />
                <p className="container_icons_text">
                  Postado por <span>{postedBy}</span>
                </p>
              </div>
            </div>
          </>
        ) : (
          <>
            <div>
              <h3 className="container__card__title">{subtitle}</h3>
              <p className="container__card_text">{text}</p>
              <div className="container_icons">
                <img src={icon} alt="Ícone de Dente" className="container__card__icon" />
                <p className="container_icons_text">
                  Postado por <span>{postedBy}</span>
                </p>
              </div>
            </div>
            <img className="container__card__img" src={imageSrc} alt={alt} />
          </>
        )}
      </div>
      <Carousel items={carousel} />
      <div className="container__button">
        <Button link="https://srdentech.vercel.app/ver-mais" target="_blank" label="Ver mais" />
      </div>
    </Styles.Container>
  );
};

const ContainerSection: React.FC = () => {
  return (
    <>
      {dataSection.map((section, index) => (
        <Section key={section.id} {...section} index={index} />
      ))}
    </>
  );
};

export default ContainerSection;
