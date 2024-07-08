import { dataCardSobreProps } from "@/types/dataCardsSobre";
import styles from "./cardSobre.module.scss";
import tracado from "./assets/tracado.svg"
import dente from "./assets/dente.svg";

type CardSobreProps = Omit<dataCardSobreProps, "id">;

export const CardSobre = ({ tituloCard, foto, alt, subtituloCard, descricaoCard, infosTexto, infosDescritiva, primario, cardDesc }: CardSobreProps) => {
  if (infosDescritiva !== undefined){
    return (
      <div className={styles.container}>
        <img src={foto} alt={alt} className={styles.container__foto}/>
        <div className={styles.container__containerInfos}>
          <h3 className={styles.container__containerInfos__titulo}>{tituloCard}</h3>
          <h4 className={styles.container__containerInfos__subtitulo}>{subtituloCard}</h4>
          <p className={styles.container__containerInfos__descricao}>{descricaoCard}</p>
          <div>
            <img src={tracado} alt="Traçado azul separando informações" className={styles.container__containerInfos__tracado}/>
          </div>
          <ul>
            <h5>{infosTexto.primTituloInfo}</h5>
            { infosTexto.primItemInfo.map((item, i) => <li key={i}>{item}</li>) }
          </ul>
          <ul>
            <h5>{infosDescritiva.secTituloInfo}</h5>
            {infosDescritiva.secItemInfo.map(item => (
              <li key={item.id}><span>{item.destaque}</span>{item.texto}</li>
            ))}
          </ul>
          <div className={styles.container__containerInfos__containerCardDesc}>
            <img src={dente} alt="Imagem de um dente" />
            <p>{cardDesc}</p>
          </div>
        </div>
      </div>
    )
  } else {
    return <></>
  }
}