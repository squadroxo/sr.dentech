import { dataCardSobreProps } from "@/types/dataCardsSobre";
import styles from "./cardSobreMobile.module.scss";
import { useNavigate } from "react-router";

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
    descMobile,
    slug
  }:CardSobreProps) => {

  const navigate = useNavigate()
  
  return (
    <div className={styles.container} onClick={() => navigate(`/aprenda-mais/${slug}`)}>
      <div className={styles.containerInfo}>
        <h2 className={styles.titulo}>{tituloCard}</h2>
        <p className={styles.desc}>{descMobile}</p>
      </div>
      <img src={foto} alt={alt} className={styles.img}/>
    </div>
  )
}