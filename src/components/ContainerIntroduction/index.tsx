import ComponentButton from "components/ContainerButton";
import style from 'components/ContainerIntroduction/ContainerIntroduction.module.scss';
import criancasEscovandoDente from "assetsIcons/criancasEscovandoDente.png"; // Caminho relativo otimizado
import { motion } from "framer-motion";

const ContainerIntroduction: React.FC = () => {
    return (
        <>
            <motion.div
                className={style.containerIntroduction}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
            >
                <div className={style.container1}>
                    <div className={style.containerTexto}>
                        <h1 className={style.containerTitulo}>Sr. Dente é seu amigo!</h1>
                        <p className={style.containerDescricao}>
                            <span>Aprenda mais sobre saúde bucal com o Sr. Dente!</span><br />
                            Aqui você encontra curiosidades e dicas para cuidar bem da saúde bucal.
                        </p>
                        </div>
                        <ComponentButton
                            link="/saiba-mais"
                            label="Saiba mais"
                            className={style.btSaibaMais}
                            labelClassName={style.labelSaibaMais}
                            primario={true}
                        />
                   

                </div>

                <div className={style.container2}>
                    <img className={style.imagemCrianca} src={criancasEscovandoDente} alt="Crianças escovando os dentes" />
                </div>
            </motion.div>
            <motion.div
                className={style.containerIntroductionMobile}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
            >
                <h1 className={style.tituloMobile}>Sr. Dente é seu amigo!</h1>
                <img className={style.imagemMobile} src={criancasEscovandoDente} alt="Crianças escovando os dentes" />
                <p className={style.textoMobile}>
                    <span>Aprenda mais sobre saúde bucal!</span><br />
                    Aqui você encontra curiosidades e dicas para cuidar bem da saúde bucal.
                </p>
                <ComponentButton
                    link="/saiba-mais"
                    label="Saiba mais"
                    className={style.btSaibaMaisMobile}
                    labelClassName={style.labelSaibaMaisMobile}
                    primario={true}
                />
            </motion.div>
        </>

    );
};

export default ContainerIntroduction;
