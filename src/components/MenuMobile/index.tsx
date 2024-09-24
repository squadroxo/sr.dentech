import { dataLinksMobile } from "./data";
import styles from "./MenuMobile.module.scss";
import { motion } from "framer-motion";

export const MenuMobile = () => {
  return (
    <motion.ul
      className={styles.containerMobile}
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.3 }}
    >
      {dataLinksMobile.map((link) => (
        <motion.li
          key={link.id}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <a href={link.href} className={styles.containerLinks__lista__item}>
            {link.texto}
          </a>
        </motion.li>
      ))}
    </motion.ul>
  );
};
