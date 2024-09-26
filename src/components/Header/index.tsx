import styles from "./Header.module.scss";
import logo from "../../assetsIcons/logoSrDente.png";
import { dataLinks } from "./data"
import { useNavigate } from "react-router";
import { useState } from "react";
import { MenuMobile } from "../MenuMobile";
import { MenuBurguer } from "../Icons/MenuBurguer";
import { AnimatePresence, motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";

export const Header = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  function toggleIsOpen() {
    setIsOpen(previewValue => !previewValue)
  }

  return (
    <header className={styles.container}>
      <div className={styles.containerTitulo} onClick={() => navigate("/")}>
        <img src={logo} alt="Imagem de um dente acenando" className={styles.containerTitulo__img} />
      </div>
      <nav className={styles.containerLinks}>
        <ul className={styles.containerLinks__lista}>
          {dataLinks.map(link => (
            <li key={link.id}><a href={link.href} className={styles.containerLinks__lista__item}>{link.texto}</a></li>
          ))}
        </ul>
        <div className={styles.containerHamburguer}>
          <AnimatePresence>
            {isOpen && <MenuMobile />}
          </AnimatePresence>
          {isOpen ? <IoMdClose onClick={toggleIsOpen} size={30} color="white" /> : <MenuBurguer height="20" width="30" onClick={toggleIsOpen} />}
        </div>

      </nav>
    </header>
  )
}