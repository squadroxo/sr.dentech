import Button from "components/Button"
import { useLocation } from "react-router"
import * as Styles from "./style";

export const Footer = () => {
  // const handleClick = () => {}

  const local = useLocation();

  const isHomepage = local.pathname === "/" ? true : false;

  return (
    <Styles.Footer
      style={{ borderRadius: isHomepage ? "40px 40px 0 0" : "0"}}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container__contSec">
        <div className="container__connSec__content">
          <img src="/assets/iconDenteSorrindoComKit.png" alt="Dente Sorrindo Com Kit Escovacao" />
          <p className="container__contSec__txt">
          Essa é uma iniciativa voluntária em parceria 
          com o Pipoca Ágil
          </p>
        </div>
        <h3 className="container__contato">
          Contato: <a href="mailto:e-mailsrdente@e-mail.com" target="_blank"  rel="noopener noreferrer">
            e-mailsrdente@e-mail.com
          </a>
        </h3>
        <Button  
          label="Pipoca Ágil" 
          link="https://pipocaagil.com.br"
          target="_blank" 
          onClick={() => { console.log('Botão clicado!')}} 
          secondary={true}
          />
          <div className="container__socialmedia">
            <p className="container__socialmedia__txt">Siga nossas redes sociais</p>
            <div className="container__socialmidia__icones">
              <img src="/assets/ic_social.png" alt="Ícone do Linkedln" />
              <img src="/assets/youtube.png" alt="Ícone do Youtube" />
              <img src="/assets/Subtract.png" alt="Ícone do Spotify" />
            </div>
          </div>
        </div>
    </Styles.Footer>
  )
}