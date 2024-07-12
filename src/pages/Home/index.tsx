import ContainerIntroduction from "../../components/ContainerIntroduction";
import ContainerSobreNos from "../../components/ContainerSobreNos";
import { Sobre } from "../../components/Sobre";
import styles from "./home.module.scss";

export const HomePage = () => {
  return (
    <div className={styles.container}>
      <ContainerIntroduction />
      <Sobre />
      <div className={styles.backgroundSobreNos}>
        <ContainerSobreNos />
      </div>
    </div>
  )
}