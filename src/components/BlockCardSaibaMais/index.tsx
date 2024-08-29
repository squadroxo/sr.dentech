import styles from "./BlockCardSaibaMais.module.scss";
import DenteSorrindoSegurandoEscova from "../../assetsIcons/denteSorrindoSegurandoEscova.png"
import DenteLinha from "../../assetsIcons/denteSorrindoSegurandoEscovaLinha.png"
interface FuncionalidadeRequisitosProps {
    titulo: string;
    texto: string;
}

interface BlockCardSaibaMaisProps {
    tituloBlock: string;
    funcionalidadeRequisitos: FuncionalidadeRequisitosProps[];
    isRequisitos?: boolean; 
}

export const BlockCardSaibaMais = ({ tituloBlock, funcionalidadeRequisitos, isRequisitos }: BlockCardSaibaMaisProps) => {
    return (
        <div className={styles.container__Geral}>
            {
                isRequisitos && (
                    <img
                        src={DenteLinha}
                        alt="Dente Sorrindo e Segurando uma escova com uma linha azul atrás"
                        className={styles.imagemRequisitos}
                    />
                )
            }
            <h2 className={isRequisitos ? styles.tituloRequisitos : styles.tituloFuncionalidade}>
                {tituloBlock}
            </h2>            
            {!isRequisitos && (
                <img
                    src={DenteSorrindoSegurandoEscova}
                    alt="Dente Sorrindo e Segurando uma escova"
                    className={styles.imagemFuncionalidade}
                />
            )}
            {funcionalidadeRequisitos.map((funcionalidadeRequisitos, index) => (
               <div
                    className={`${styles.card} ${isRequisitos ? styles.cardRequisitos : ""}`}
                    key={index}
                >

                    <h3 className={styles.tituloCard} >{funcionalidadeRequisitos.titulo}</h3>
                    <p className={styles.textoCard}>{funcionalidadeRequisitos.texto}</p>
                </div>
            ))}
        </div>
    );
}
