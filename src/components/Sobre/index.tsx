import styles from "./sobre.module.scss";
import data from "../../data/data";
import { CardSobre } from "../CardSobre";
import { CardSobreMobile } from "../CardSobreMobile";
import linhaDivisoria from "../../assetsIcons/divisoria.png";

export const Sobre = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.container__titulo}>Aprenda mais sobre saúde bucal</h2>
      <img src={linhaDivisoria} alt="Linha divisória azul" className={styles.linhaDivisoria}/>
      { data.map(item => (
        <CardSobre
          key={item.id} 
          titleCard={item.titleCard}
          descCard={item.descCard}
          photo={item.photo}
          infosCards={item.infosCards}
          primary={item.primary}
          subtitleCard={item.subtitleCard}
          alt={item.alt}
          cardDesc={item.cardDesc}
          photoDivision={item.photoDivision}
        />
      )) }
      <div className={styles.containerMobile}>
        { data.map(item => (
          <CardSobreMobile 
            key={item.id} 
            titleCard={item.titleCard}
            descCard={item.descCard}
            photo={item.photo}
            infosCards={item.infosCards}
            primary={item.primary}
            subtitleCard={item.subtitleCard}
            alt={item.alt}
            cardDesc={item.cardDesc}
            photoDivision={item.photoDivision}
            descMobile={item.descMobile}
            slug={item.slug}
          />
        )) }
      </div>
    </div>
  )
}