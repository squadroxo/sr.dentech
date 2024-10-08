import styles from "./construcao.module.scss";
import fotoConstrucao from "./assets/obras.png";
import { Botao } from "../../components/Botao";
import { Footer } from "../../components/Footer";
const ConstrucaoPage = () => {
  return (
    <div className={styles.container}>
      <img src={fotoConstrucao} alt="Foto de um dente com capacete de construção" />
      <h2 className={styles.container__titulo}>OOOOOOOPS! Essa página está em construção. Volte futuramente para acessá-la.</h2>
      <p className={styles.container__paragrafo}>Clique aqui para voltar a página inicial.</p>
      <Botao
        href="/"
        tamanhoIcone={30}
        texto="Voltar a página inicial"
      />
        <Footer />
    </div>
  )
}

export default ConstrucaoPage;