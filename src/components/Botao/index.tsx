import { IoReturnUpBack } from "react-icons/io5";
import styles from "./botao.module.scss"

export const Botao = () => {
  return (
    <a href="/" className={styles.container}>
      <IoReturnUpBack size={30} />
      Voltar a página inicial
    </a>
  );
};
