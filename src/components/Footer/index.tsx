import Button from "components/Button";
import * as Styles from "./style";

export const Footer = () => {
  return (
    <Styles.Footer
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
          onClick={() => window.location.href = 'https://pipocaagil.com.br'}  
          secondary={true}
          />
          <div className="container__socialmedia">
            <p className="container__socialmedia__txt">Siga nossas redes sociais</p>
            <div className="container__socialmidia__icones">
              <a href="https://br.linkedin.com/company/pipoca-%C3%A1gil" target="_blank" rel="noreferrer">
              <img src="/assets/ic_social.png" alt="Ícone do Linkedln" />
              </a>
              <a href="https://www.youtube.com/@PipocaAgil" target="_blank" rel="noreferrer">
              <img src="/assets/youtube.png" alt="Ícone do Youtube" />
              </a>
              <a href="https://open.spotify.com/show/5J1scP1l7m7kXK6v5RZS7J" target="_blank" rel="noreferrer">
              <img src="/assets/Subtract.png" alt="Ícone do Spotify" />
              </a>
            </div>
          </div>
        </div>
    </Styles.Footer>
  )
}