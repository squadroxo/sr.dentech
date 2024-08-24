import ContainerIntroduction from "../../components/ContainerIntroduction";
import ContainerSobreNos from "../../components/ContainerSobreNos";
import { Sobre } from "../../components/Sobre";
import styles from "./home.module.scss";
import { motion } from "framer-motion"

export const HomePage = () => {
  return (
    <motion.div 
      className={styles.container}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <ContainerIntroduction />
      <Sobre />
      <div className={styles.backgroundSobreNos}>
        <ContainerSobreNos />
      </div>
    </motion.div>
  )
}