import styles from "./Header.module.scss";
import logo from "../../assets/Group.svg";
import { dataLinks } from "./data"
import { useNavigate } from "react-router";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <header className={styles.container}>
      <div className={styles.containerTitulo} onClick={() => navigate("/")}>
        <img src={logo} alt="Imagem de um dente acenando" className={styles.containerTitulo__img}/>
        <h1 className={styles.containerTitulo__txt}>Sr. Dente</h1>
      </div>
      <nav className={styles.containerLinks}>
        <ul className={styles.containerLinks__lista}>
          { dataLinks.map(link => (
            <li key={link.id}><a href={link.href} className={styles.containerLinks__lista__item}>{link.texto}</a></li>
          )) }
        </ul>
      </nav>
    </header>
  )
}