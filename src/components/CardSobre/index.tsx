import { dataCardSobreProps } from "@/types/dataCardsSobre";
import styles from "./cardSobre.module.scss";
import dente from "./assets/dente.svg";

type CardSobreProps = Omit<dataCardSobreProps, "id">;

export const CardSobre = ({
  tituloCard,
  foto,
  alt,
  subtituloCard,
  descricaoCard,
  infosTexto,
  infosDescritiva,
  primario,
  cardDesc,
  fotoSeparacao
}: CardSobreProps) => {
  return (
    <div
      className={styles.container}
      style={{ flexDirection: primario ? "row" : "row-reverse" }}
    >
      <img src={foto} alt={alt} className={styles.container__foto} />
      <div className={styles.container__containerInfos}>
        <h3 className={styles.container__containerInfos__titulo}>
          {tituloCard}
        </h3>
        { subtituloCard && <h4 className={styles.container__containerInfos__subtitulo}>
          {subtituloCard}
        </h4>}

        <p className={styles.container__containerInfos__descricao}>
          {descricaoCard}
        </p>
        <div>
          <img
            src={fotoSeparacao}
            alt="Traçado azul separando informações"
            className={styles.container__containerInfos__tracado}
          />
        </div>
        {infosTexto && infosTexto.map(infos => (
          <ul key={infos.id}>
            <h5>{infos.primTituloInfo}</h5>
            {infos.primItemInfo.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        ))}

        {infosDescritiva && infosDescritiva.map(item => (
            <ul className={styles.container__containerItemDescritiva} key={item.id}>
              <h5>{item.secTituloInfo}</h5>
              {item.secItemInfo.map((item) => (
                <li key={item.id} className={styles.container__containerItemDescritiva__item}>
                  <div className={styles.container__containerItemDescritiva__item__container}>
                    <p><span>{item.destaque}</span> {item.texto}</p>
                  </div>
              </li>
            ))}
            </ul>
          ))}
        { cardDesc && <div className={styles.container__containerInfos__containerCardDesc}>
          <img src={dente} alt="Imagem de um dente" />
          <p>{cardDesc}</p>
        </div>}

      </div>
    </div>
  );
};
