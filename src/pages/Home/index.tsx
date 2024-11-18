import ContainerIntroduction from "../../components/ContainerIntroduction";
import ContainerSection from "../../components/ContainerSection";
import styles from "./home.module.scss";
import { motion } from "framer-motion"
import { Footer } from "../../components/Footer";

export const HomePage = () => {
  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <ContainerIntroduction />
      <ContainerSection />
      <Footer />
    </motion.div>
  )
}