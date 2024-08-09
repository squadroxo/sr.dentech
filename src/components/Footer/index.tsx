import Button from "components/ContainerButton";
import styles from "./footer.module.scss";

export const Footer = () => {
  const handleClick = () => {
    
};
  return(
    <footer className={styles.container}>
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