import * as Styles from './styles';
import ContainerIntroduction from "../../components/ContainerIntroduction";
import ContainerSection from "../../components/ContainerSection";

export const HomePage = () => {
  return (
    <Styles.Home
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <ContainerIntroduction />
      <ContainerSection />
    </Styles.Home>
  )
}