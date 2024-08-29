import ComponentButton from "components/ContainerButton";
import style from 'components/ContainerIntroduction/ContainerIntroduction.module.scss';
import criancasEscovandoDente from "../../assetsIcons/criancasEscovandoDente.png";
import { motion } from "framer-motion"

const ContainerIntroduction: React.FC = () => {
    
    return (
        <motion.div 
            className={style.containerIntroduction}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
            <div className={style.container1}>
                <div className={style.containerTexto}>
                    <p><span>Aprenda mais sobre saúde bucal com o Sr. Dente! </span> <br></br>
                Aqui você encontra curiosidades e dicas para cuidar bem da saúde bucal.</p>
                </div>
                <ComponentButton
                    link='/saiba-mais' 
                    target="_blank"
                    label="Saiba mais"
                    className={style.btSaibaMais}
                    labelClassName={style.labelSaibaMais}
                    primario={true}
                />  
            </div>
            <div className={style.container2}>
                 <h1>Sr. Dente é seu amigo!</h1>
                <img src={criancasEscovandoDente} alt='criancas escovando dente'/>
            </div>
        </motion.div> 
    );

};

export default ContainerIntroduction;
