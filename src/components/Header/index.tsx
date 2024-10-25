// import styles from "./Header.module.scss";
import logo from "../../assetsIcons/logoSrDente.png";
import { dataLinks } from "./data"
import { useNavigate } from "react-router";
import { useState } from "react";
import { MenuMobile } from "../MenuMobile";
import { MenuBurguer } from "../Icons/MenuBurguer";
import { AnimatePresence, motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";

import * as Styles from "./styles"; 

export const Header = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  
  function toggleIsOpen() {
    setIsOpen(previewValue => !previewValue)
  }

  return (
    <Styles.Container>
      <div className="containerTitulo" onClick={() => navigate("/")}>
        <img className="containerTitulo__img" src={logo} alt="Imagem de um dente acenando" />
      </div>
      <nav className="containerLinks">
        <ul className="containerLinks__lista">
          {dataLinks.map(link => (
            <li key={link.id}>
              <a className="containerLinks__lista__item" href={link.href}>
                {link.texto}
              </a>
            </li>
          ))}
        </ul>
        <div className="containerHamburguer">
          <AnimatePresence>
            {isOpen && <MenuMobile />}
          </AnimatePresence>
          {isOpen ? <IoMdClose onClick={toggleIsOpen} size={30} color="white" /> : <MenuBurguer height="20" width="30" onClick={toggleIsOpen} />}
        </div>

      </nav>
    </Styles.Container>
  )
}
