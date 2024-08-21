import styles from "./Header.module.scss";
import logo from "../../assets/logoSrDente.png";
import { dataLinks } from "./data"
import { useNavigate } from "react-router";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { HeaderMobile } from "../HeaderMobile";

export const Header = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.container}>
      <div className={styles.containerTitulo} onClick={() => navigate("/")}>
        <img src={logo} alt="Imagem de um dente acenando" className={styles.containerTitulo__img}/>
      </div>
      <nav className={styles.containerLinks}>
        <ul className={styles.containerLinks__lista}>
          { dataLinks.map(link => (
            <li key={link.id}><a href={link.href} className={styles.containerLinks__lista__item}>{link.texto}</a></li>
          ))}
        </ul>
        { isOpen && <HeaderMobile />}
        <GiHamburgerMenu className={styles.iconMenu} size={50} color="white" onClick={() => setIsOpen(pv => !pv)}/>
      </nav>
    </header>
  )
}