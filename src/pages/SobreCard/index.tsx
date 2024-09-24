import dataCards from "../../data/data";
import { useNavigate, useParams } from "react-router";
import styles from "./SobreCard.module.scss";
import { NotFoundPage } from "../NotFound";
import { Backfoward } from "../../components/Icons/Backfoward";
import pontilhado from "../../assets/pontilhado.svg";
import tracado from "../../assets/tracado.svg";
import { Fragment } from "react/jsx-runtime";
import { TextoDestaque } from "../../components/TextoDestaque";
import dente from "./assets/dente.svg";

export const SobreCardPage = () => {
  const { slugCard } = useParams();
  const navigate = useNavigate();

  const cardInformativo = dataCards.find(item => item.slug === slugCard)

  if (!cardInformativo) return <NotFoundPage />;

  return (
    <div className={styles.container}>
      <div className={styles.containerButton}>
        <button className={styles.buttonBack} onClick={() => navigate("/")}>
          <Backfoward />
        </button>
        <h2 className={styles.titulo}>{cardInformativo.titleCard}</h2>
      </div>
      <h3 className={styles.subtitulo}>{cardInformativo.subtitleCard}</h3>
      <img src={cardInformativo.primary ? pontilhado : tracado} alt="" className={styles.divisoria}/>
      <div className={styles.containerInfos}>
        <img src={`/${cardInformativo.photo}`} alt={cardInformativo.alt} className={styles.foto}/>
        <p className={styles.descricaoCard}>{cardInformativo.descCard}</p>
        {cardInformativo.infosCards.map(item => (
          <Fragment key={item.id}>
            <h4 className={styles.subtituloInfo}>{item.infoTituloCard}</h4>
            <ul>
              {item.infos.map(item => (
                item.destaque 
                ? <TextoDestaque destaque={item.destaque} texto={item.texto} key={item.id}/> 
                : <li key={item.id} className={styles.itemInfoLista}>
                  {item.texto}
                </li>
              ))}
            </ul>
          </Fragment>
        ))}
        <div className={styles.containerDesc}>
          <img src={dente} alt="Imagem de um dente" />
          <h6 className={styles.infoDesc}>{cardInformativo.cardDesc}</h6>
        </div>
      </div>
    </div>
  )
}