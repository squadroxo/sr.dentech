import * as Styles from "./style";
import dataSection from "../../data/dataSection";
import { dataSectionProps } from "../../types/dataSections"; 
import Carousel from "../Carousel";
import Button from "../Button";

const Section: React.FC<dataSectionProps> = ({ titleSection, tag, photo, alt, subtitle, text, postedBy, icon, carousel }) => {
  return (
    <Styles.Container>
      <Styles.Line />
      <div className="container__tag">{tag}</div>
      <h2 className="container__title">{titleSection}</h2>
      <div className="container__card__content">
        <img className="container__card__img" src={photo} alt={alt} />
        <h3 className="container__card__title">{subtitle}</h3>
        <p className="container__card_text">{text}</p>
        <div className="container_icons">
          <img src={icon} alt="Ícone de Dente" />
          <p className="container_icons_text">
            Postado por <span>{postedBy}</span>
          </p>
        </div>
      </div>
      <Carousel items={carousel} /> 
      <div className="container__button">
        <Button link="https://srdentech.vercel.app/saiba-mais" target="_blank" label="Ver mais"/>
      </div>
    </Styles.Container>
  );
};

const ContainerSection: React.FC = () => {
  return (
    <>
      {dataSection.map((section) => (
        <Section key={section.id} {...section} />
      ))}
    </>
  );
};

export default ContainerSection;
