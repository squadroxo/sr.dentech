import { GoDotFill } from "react-icons/go";
import styles from "./textoDestaque.module.scss"

interface ITextoDestaqueProps {
  destaque: string,
  texto: string
}

export const TextoDestaque = ({ destaque, texto }:ITextoDestaqueProps) => {
  return (
    <li className={styles.container}>
      <div className={styles.containerBullet}>
        <GoDotFill size={10}/>
      </div>
      <div className={styles.containerInfos}>
        <span className={styles.containerInfos__destaque}>{destaque}</span>
        <p className={styles.containerInfos__texto}>{texto}</p>
      </div>
    </li>
  )
}