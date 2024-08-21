import { dataCardSobreProps } from "@/types/dataCardsSobre";
import styles from "./cardSobreMobile.module.scss";

type CardSobreProps = Omit<dataCardSobreProps, "id">;

export const CardSobreMobile = ({
    tituloCard,
    foto,
    alt,
    subtituloCard,
    descricaoCard,
    primario,
    cardDesc,
    fotoSeparacao,
    infosCards,
    descMobile
  }:CardSobreProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.containerInfo}>
        <h2 className={styles.titulo}>{tituloCard}</h2>
        <p className={styles.desc}>{descMobile}</p>
      </div>
      <img src={foto} alt={alt} className={styles.img}/>
    </div>
  )
}