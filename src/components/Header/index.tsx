import styles from "./Header.module.scss";
import logo from "../../assetsIcons/logoSrDente.png";
import { dataLinks } from "./data"
import { useNavigate } from "react-router";
import { useState } from "react";
import { MenuMobile } from "../MenuMobile";
import { MenuBurguer } from "../Icons/MenuBurguer";
import { AnimatePresence, motion } from "framer-motion"

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
        <AnimatePresence>
          { isOpen && <MenuMobile />}
        </AnimatePresence>
        <button onClick={() => setIsOpen(pv => !pv)} className={styles.iconMenu}>
          <MenuBurguer />
        </button>
      </nav>
    </header>
  )
}