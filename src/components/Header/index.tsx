import styles from "./Header.module.scss";
import logo from "../../assets/Group.svg"

export const Header = () => {
  const linksNav = [
    "Home",
    "Saúde bucal familiar",
    "Problemas bucais",
    "Sobre"
  ]

  return (
    <header className={styles.container}>
      <div className={styles.containerTitulo}>
        <img src={logo} alt="Imagem de um dente acenando" className={styles.containerTitulo__img}/>
        <h1 className={styles.containerTitulo__txt}>Sr. Dente</h1>
      </div>
      <nav className={styles.containerLinks}>
        <ul className={styles.containerLinks__lista}>
          { linksNav.map((link, i) => (
            <li key={i}><a href="/" className={styles.containerLinks__lista__item}>{link}</a></li>
          )) }
        </ul>
      </nav>
    </header>
  )
}