import style from "components/ContainerSobreNos/ContainerSobreNos.module.scss";
import ComponentButton from "components/ContainerButton/index";
import DenteComEscovaSorrindo from "assetsIcons/DenteSorrindoComKitEscovacao.png";
import { motion } from "framer-motion";

function ContainerSobreNos() {
  return (
    <>
      <div className={style.wrapper}>
        <div className={style.containerGeral}>
          <motion.div
            className={style.containerSobre}
            initial={{ x: 200 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.2 }}
          >
            <h1 className={style.tituloSobre}>Sobre Nós</h1>
            <p className={style.textoSobre}>
              Bem-vindos ao Projeto Sr. Dente, onde sorrisos são nossa
              especialidade! Em parceria com o grupo Pipoca Ágil, estamos aqui
              para tornar a saúde bucal uma jornada divertida e informativa para
              todas as famílias. Nossa missão é proporcionar educação de
              qualidade e cuidados odontológicos de primeira, tudo para garantir
              mais qualidade de vida e muitos sorrisos felizes.
            </p>
          </motion.div>
          <div className={style.containerMeio}>
            <img
              className={style.imagemSobreNos}
              src={DenteComEscovaSorrindo}
              alt="Dente sorrindo segurando um kit escovacao"
            />
            <div className={style.objetivo}>
              <div className={style.missao}>
                <h1>Missão:</h1>
                <p>
                  Nosso objetivo é fazer da saúde bucal uma aventura familiar
                  através da educação, prevenção e acesso a cuidados
                  odontológicos excepcionais.
                </p>
              </div>
              <div className={style.visao}>
                <h1>Visão:</h1>
                <p>
                  Queremos ser o ponto de referência nacional em saúde bucal
                  comunitária, criando sorrisos saudáveis e contagiando
                  felicidade por todas as famílias.
                </p>
              </div>
              <div className={style.valores}>
                <h1>Valores:</h1>
                <ul>
                  <li>
                    Compromisso: Estamos 100% dedicados e responsáveis em tudo
                    que fazemos.
                  </li>
                  <li>
                    Educação: Acreditamos que aprender sobre saúde bucal é o
                    primeiro passo para um sorriso radiante.
                  </li>
                  <li>
                    Inclusão: Garantimos que todos tenham acesso igualitário aos
                    melhores cuidados odontológicos.
                  </li>
                  <li>
                    Inovação: Utilizamos tecnologias e métodos inovadores para
                    transformar a saúde bucal em uma experiência incrível.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={style.equipe}>
            <h1 className={style.equipeTitulo}>Nossa Equipe:</h1>
            <p className={style.equipeTexto}>
              Conheça os heróis por trás do Sr. Dente: uma equipe de tecnologia,
              design e gestão de produtos digitais, todos unidos para fazer a
              diferença e transformar vidas através de sorrisos saudáveis.
            </p>
            <ComponentButton
              link="https://pipoca-agil-apresentacao.vercel.app"
              target="_blank"
              label="Nossa Equipe"
              className={style.btEquipe}
              labelClassName={style.labelEquipe}
              primario={true}
            />
            <p className={style.equipeContato}>
              Contato:{" "}
              <a
                href="mailto:e-mailsrdente@e-mail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                e-mailsrdente@e-mail.com
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className={style.wrapperMobile}>
        <motion.div
          className={style.containerSobreMobile}
          initial={{ x: 200 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.2 }}
        >
          <img
            className={style.imagemSobreNosMobile}
            src={DenteComEscovaSorrindo}
            alt="Dente sorrindo segurando um kit escovacao"
          />
          <div className={style.textoMobile}>
            <h1 className={style.tituloSobreMobile}>Sobre Nós</h1>
            <p className={style.textoSobreMobile}>
              Bem-vindos ao Projeto Sr. Dente, onde sorrisos são nossa
              especialidade! Em parceria com o grupo Pipoca Ágil, estamos aqui
              para tornar a saúde bucal uma jornada divertida e informativa para
              todas as famílias. Nossa missão é proporcionar educação de
              qualidade e cuidados odontológicos de primeira, tudo para garantir
              mais qualidade de vida e muitos sorrisos felizes.
            </p>

            <div className={style.objetivoMobile}>
              <div className={style.missaoMobile}>
                <h1 className={style.tituloMissaoMobile}>Missão:</h1>
                <p className={style.textoMissaoMobile} >
                  Nosso objetivo é fazer da saúde bucal uma aventura familiar
                  através da educação, prevenção e acesso a cuidados
                  odontológicos excepcionais.
                </p>
              </div>
              <div className={style.VisaoMobile}>
                <h1 className={style.tituloVisaoMobile}>Visão:</h1>
                <p className={style.textoVisaoMobile}>
                  Queremos ser o ponto de referência nacional em saúde bucal
                  comunitária, criando sorrisos saudáveis e contagiando
                  felicidade por todas as famílias.
                </p>
              </div>
              <div >
                <h1 className={style.tituloValoresMobile}>Valores:</h1>
                <ul className={style.textoValoresMobile}>
                  <li>
                    Compromisso: Estamos 100% dedicados e responsáveis em tudo
                    que fazemos.
                  </li>
                  <li>
                    Educação: Acreditamos que aprender sobre saúde bucal é o
                    primeiro passo para um sorriso radiante.
                  </li>
                  <li>
                    Inclusão: Garantimos que todos tenham acesso igualitário aos
                    melhores cuidados odontológicos.
                  </li>
                  <li>
                    Inovação: Utilizamos tecnologias e métodos inovadores para
                    transformar a saúde bucal em uma experiência incrível.
                  </li>
                </ul>
              </div>
            </div>

            <div className={style.equipeMobile}>
              <h1 className={style.tituloEquipeMobile}>Nossa Equipe:</h1>
              <p className={style.textoEquipeMobile}>
                Conheça os heróis por trás do Sr. Dente: uma equipe de
                tecnologia, design e gestão de produtos digitais, todos unidos
                para fazer a diferença e transformar vidas através de sorrisos
                saudáveis.
              </p>
              <p className={style.equipeContatoMobile}>
                Contato:{" "}
                <a
                  href="mailto:e-mailsrdente@e-mail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  e-mailsrdente@e-mail.com
                </a>
              </p>
              <ComponentButton
                link="https://pipoca-agil-apresentacao.vercel.app"
                target="_blank"
                label="Nossa Equipe"
                className={style.btEquipeMobile}
                labelClassName={style.labelEquipeMobile}
                primario={true}
              />
            </div>
          </div>
        </motion.div>

      </div>
    </>
  );
}

export default ContainerSobreNos;
