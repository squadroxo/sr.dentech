import styles from "./BlockCardSaibaMais.module.scss";
import DenteSorrindoSegurandoEscova from "../../assetsIcons/denteSorrindoSegurandoEscova.png";
import DenteLinha from "../../assetsIcons/denteSorrindoSegurandoEscovaLinha.png";
import tracado from "../../assetsIcons/tracado.png";
import DenteSorrindoDesktop from "../../assetsIcons/denteSorrindoDesktop.png"
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
    const width = window.innerWidth;

    
    return (
        <div className={styles.wrapper}>
            <div className={styles.containerGeral}>

                <div className={isRequisitos ? styles.divTituloRequisitos : styles.divTituloFuncionalidade}>
                    <h2 className={isRequisitos ? styles.tituloRequisitos : styles.tituloFuncionalidade}>
                        {tituloBlock}
                    </h2>

                    <div className={styles.imagemDesktopRequisitos}>
                        {isRequisitos && width >= 1199 && width <= 1921 && (
                            <>
                                <img
                                    className={styles.DenteSorrindoDesktop}
                                    src={DenteSorrindoDesktop}
                                    alt="Dente Sorrindo e Segurando uma escova"
                                />
                                <img
                                    src={tracado}
                                    alt="Tracado"
                                    className={styles.tracado}
                                />
                            </>
                        )}
                    </div>

                    {isRequisitos && (
                        <img
                            src={DenteLinha}
                            alt="Dente Sorrindo e Segurando uma escova com uma linha azul atrás"
                            className={styles.imagemRequisitos}
                        />
                    )}

                    {!isRequisitos && (
                        <img
                            src={DenteSorrindoDesktop}
                            alt="Dente Sorrindo e Segurando uma escova"
                            className={styles.imagemFuncionalidade}
                        />
                    )}
                </div>

                <div className={isRequisitos ? styles.cardConteudoRequisitos : styles.cardConteudoFuncionalidade}>
                    {funcionalidadeRequisitos.map((requisito, index) => (
                        <div
                            className={`${styles.card} ${isRequisitos ? styles.cardRequisitos : ""}`}
                            key={index}
                        >
                            <h3 className={styles.tituloCard}>{requisito.titulo}</h3>
                            <p className={styles.textoCard}>{requisito.texto}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
