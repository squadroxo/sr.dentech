import Button from "components/ContainerButton"
import styles from "./footer.module.scss"
import { useLocation } from "react-router"

export const Footer = () => {
  const handleClick = () => {}

  const local = useLocation();

  const isHomepage = local.pathname === "/" ? true : false;

  return (
    <footer 
      className={styles.container}
      style={{ borderRadius: isHomepage ? "40px 40px 0 0" : "0"}}
    >
      <h3 className={styles.container__contato}>Contato: <a href="mailto:e-mailsrdente@e-mail.com" target="_blank" rel="noopener noreferrer">e-mailsrdente@e-mail.com</a></h3>
      <div className={styles.container__contSec}>
        <p className={styles.container__contSec__txt}>Essa é uma iniciativa voluntária em parceria com o Pipoca Ágil</p>
        <Button  
        label="Pipoca Ágil" 
        link="https://pipocaagil.com.br"
        target="_blank" 
        onClick={() => { 
          console.log('Botão clicado!'); 
      }} 
         primario={false} className={styles.container__contSec__btn} labelClassName={styles.container__contSec__label}/>
      </div>
    </footer>
  )
}