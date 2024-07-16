import { GoDotFill } from "react-icons/go";
import styles from "./textoDestaque.module.scss";

interface ITextoDestaqueProps {
  destaque: string;
  texto: string;
}

export const TextoDestaque = ({ destaque, texto }: ITextoDestaqueProps) => {
  return (
    <li className={styles.container}>
      <div className={styles.containerBullet}>
        <GoDotFill size={10} />
      </div>
      <p className={styles.container__texto}>
        <span className={styles.container__destaque}>{destaque}</span>{" "}
        {texto}
      </p>
    </li>
  );
};
