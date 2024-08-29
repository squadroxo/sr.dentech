import line from "../../assets/line.svg";
import styles from "./LetsMake.module.scss";
export const LetsMake = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.subtitle}>Vamos construir algo incrível juntos!</h3>
      <p className={styles.desc}>Estamos desenvolvendo uma página web super interativa e educativa para ajudar você a cuidar da saúde dental da sua família de maneira fácil e divertida. Imagine um mundo onde todos têm sorrisos brilhantes e saudáveis!</p>
      <img src={line} alt="Linha divisória" />
    </div>
  )
}