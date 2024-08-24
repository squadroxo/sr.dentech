import { dataCardSobreProps } from "@/types/dataCardsSobre";
import styles from "./cardSobreMobile.module.scss";
import { useNavigate } from "react-router";
import { motion } from "framer-motion"

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
    <motion.div 
      className={styles.container} 
      onClick={() => navigate(`/aprenda-mais/${slug}`)}
      initial={{ x: primario ? -100 : 100 }}
      whileInView={{ x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <div className={styles.containerInfo}>
        <h2 className={styles.titulo}>{tituloCard}</h2>
        <p className={styles.desc}>{descMobile}</p>
      </div>
      <img src={foto} alt={alt} className={styles.img}/>
    </motion.div>
  )
}