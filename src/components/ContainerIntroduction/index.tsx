import ComponentButton from "components/ContainerButton";
import style from 'components/ContainerIntroduction/ContainerIntroduction.module.scss';
import * as Styles from './styles';
import criancasEscovandoDente from "assetsIcons/criancasEscovandoDente.png"; // Caminho relativo otimizado
import { motion } from "framer-motion";

const ContainerIntroduction: React.FC = () => {
  return (
    <>
      {/*
        TODO: na task de refatoração Web, remover todo o conteúdo abaixo (motion.div) 
        e apagar o arquivo ContainerIntroduction.module.scss. Fazer a estilização com 
        media queries no arquivo styles.ts 
      */}
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

      <Styles.Article
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Styles.Image
          src={criancasEscovandoDente}
          alt="Crianças escovando os dentes"
        />
        <Styles.Content>
          <Styles.Title>Sr. Dente é seu amigo!</Styles.Title>
          <Styles.Text>
            <span>Aprenda mais sobre saúde bucal com o Sr. Dente!</span><br />
            Aqui você encontra curiosidades e dicas para cuidar bem da saúde bucal.
          </Styles.Text>
        </Styles.Content>
        {/* TODO: substituir pelo componente Button (task 120) */}
        <Styles.Button
          link="/saiba-mais"
          label="Saiba mais"
          primario
        />
      </Styles.Article>
    </>
  );
};

export default ContainerIntroduction;
