import styles from "./notFound.module.scss";
import foto404 from "./assets/404.png";
import { IoReturnUpBack } from "react-icons/io5";

export const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <img src={foto404} alt="Foto de dente pensando 404"/>
      <h2 className={styles.container__titulo}>OOOOOOOPS! Página não encontrada.</h2>
      <p className={styles.container__paragrafo}>Clique aqui para voltar a página inicial.</p>
      <a href="/" className={styles.container__link}>
        <IoReturnUpBack size={30}/>
        Voltar a página inicial
      </a>
    </div>
  )
}