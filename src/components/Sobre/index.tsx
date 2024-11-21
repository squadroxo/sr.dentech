import styles from "./sobre.module.scss";
import data from "../../data/data"; // TODO: deletar ou será reaproveitado?
import { CardSobre } from "../CardSobre";
import { CardSobreMobile } from "../CardSobreMobile";
import linhaDivisoria from "../../assetsIcons/divisoria.png"; // TODO: deletar arquivo

// TODO: este componente é usado somente na versão antiga do site. Ele renderiza
// o conteúdo sobre saúde bucal da Home, que na versão atual foi substituído por 
// seções que contêm um carrossel com páginas individuais. 
// Deletar quando o épico do MVP for finalizado?
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