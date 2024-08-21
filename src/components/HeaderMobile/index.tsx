import { dataLinksMobile } from "./data";
import styles from "./HeaderMobile.module.scss";

export const HeaderMobile = () => {
  return (
    <ul className={styles.containerMobile}>
      { dataLinksMobile.map(link => (
        <li key={link.id} ><a href={link.href} className={styles.containerLinks__lista__item}>{link.texto}</a></li>
      )) }
    </ul>
  )
}