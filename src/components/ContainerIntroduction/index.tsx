import * as Styles from './styles';
import criancasEscovandoDente from "assetsIcons/criancasEscovandoDente.png";
import criancasEscovandoDenteMob from "assetsIcons/criancasEscovandoDenteMobile.png";
import Button from "../Button";

const WEB_WIDTH = '768px';

const ContainerIntroduction: React.FC = () => {
  return (
    <Styles.Article
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Styles.ImageSet>
        <source media={`(min-width: ${WEB_WIDTH})`} srcSet={criancasEscovandoDente} />
        <img src={criancasEscovandoDenteMob} alt="Crianças escovando um dente gigante" />
      </Styles.ImageSet>
      <Styles.Content>
        <Styles.Title>Sr. Dente é seu amigo!</Styles.Title>
        <Styles.Text>
          <span>Aprenda mais sobre saúde bucal com o Sr. Dente!</span><br />
          Aqui você encontra curiosidades e dicas para cuidar bem da saúde bucal.
        </Styles.Text>
        <Button
          link="/saiba-mais"
          label="Saiba mais"
        />
      </Styles.Content>
    </Styles.Article>
  );
};

export default ContainerIntroduction;
