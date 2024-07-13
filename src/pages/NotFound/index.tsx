import { Botao } from "../../components/Botao";
import foto404 from "./assets/404.png";
import styles from "./notFound.module.scss";

export const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <img src={foto404} alt="Foto de dente pensando 404"/>
      <h2 className={styles.container__titulo}>OOOOOOOPS! Página não encontrada.</h2>
      <p className={styles.container__paragrafo}>Clique aqui para voltar a página inicial.</p>
      <Botao />
    </div>
  )
}