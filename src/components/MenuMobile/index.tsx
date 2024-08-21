import { dataLinksMobile } from "./data";
import styles from "./MenuMobile.module.scss";

export const MenuMobile = () => {
  return (
    <ul className={styles.containerMobile}>
      { dataLinksMobile.map(link => (
        <li key={link.id} ><a href={link.href} className={styles.containerLinks__lista__item}>{link.texto}</a></li>
      )) }
    </ul>
  )
}