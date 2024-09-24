import { dataCardSobreProps } from "@/types/dataCardsSobre";
import styles from "./cardSobreMobile.module.scss";
import { useNavigate } from "react-router";
import { motion } from "framer-motion"

type CardSobreProps = Omit<dataCardSobreProps, "id">;

export const CardSobreMobile = ({
    titleCard,
    photo,
    alt,
    subtitleCard,
    descCard,
    primary,
    cardDesc,
    photoDivision,
    infosCards,
    descMobile,
    slug
  }:CardSobreProps) => {

  const navigate = useNavigate()
  
  return (
    <motion.div 
      className={styles.container} 
      onClick={() => navigate(`/aprenda-mais/${slug}`)}
      initial={{ x: primary ? -100 : 100 }}
      whileInView={{ x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <div className={styles.containerInfo}>
        <h2 className={styles.titulo}>{titleCard}</h2>
        <p className={styles.desc}>{descMobile}</p>
      </div>
      <img src={photo} alt={alt} className={styles.img}/>
    </motion.div>
  )
}