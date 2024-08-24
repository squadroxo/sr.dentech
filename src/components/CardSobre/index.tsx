import { dataCardSobreProps } from "@/types/dataCardsSobre";
import styles from "./cardSobre.module.scss";
import dente from "./assets/dente.svg";
import { TextoDestaque } from "../TextoDestaque";
import { motion } from "framer-motion"

type CardSobreProps = Omit<dataCardSobreProps, "id" | "descMobile" | "slug">;

export const CardSobre = ({
  tituloCard,
  foto,
  alt,
  subtituloCard,
  descricaoCard,
  primario,
  cardDesc,
  fotoSeparacao,
  infosCards
}: CardSobreProps) => {
  return (
    <motion.div
      className={styles.container}
      style={{ flexDirection: primario ? "row" : "row-reverse" }}
      initial={{ x: primario ? -300 : 300 }}
      whileInView={{ x: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
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
        <div className={styles.container__containerInfos__containerDivisoria}>
          <img
            src={fotoSeparacao}
            alt="Traçado azul separando informações"
            className={styles.container__containerInfos__tracado}
          />
        </div>
        {infosCards && infosCards.map(item => (
          <ul key={item.id} className={styles.container__containerInfos__containerLista}>
            <h5 className={styles.tituloLista}>{item.infoTituloCard}</h5>
            {item.infos.map(item => (
              item.destaque ? <TextoDestaque destaque={item.destaque} texto={item.texto} key={item.id}/> :
              <li key={item.id} className={styles.itemLista}>{item.texto}</li>
            ))}
          </ul>
        ))}
        { cardDesc && <div className={styles.container__containerInfos__containerCardDesc}>
          <img src={dente} alt="Imagem de um dente" className={styles.imgCardDesc}/>
          <p className={styles.textoCardDesc}>{cardDesc}</p>
        </div>}

      </div>
    </motion.div>
  );
};
