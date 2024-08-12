import Button from "components/ContainerButton"
import styles from "./footer.module.scss"
import { useLocation } from "react-router"

export const Footer = () => {
  const local = useLocation()
  const homePage = local.pathname === "/" ? true : false;
  

  const handleClick = () => {
    
  }
  return(
    <footer 
      className={homePage ? styles.container : styles.containerSecPages}
    >
      <h3 className={styles.container__contato}>Contato: <span>e-mailsrdente@e-mail.com</span></h3>
      <div className={styles.container__contSec}>
        <p className={styles.container__contSec__txt}>Essa é uma iniciativa voluntária em parceria com o Pipoca Ágil</p>
        <Button label="Pipoca Ágil" link="/" onClick={handleClick} primario={false} className={styles.container__contSec__btn} labelClassName={styles.container__contSec__label}/>
      </div>
    </footer>
  )
}