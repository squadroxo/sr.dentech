import MainTitle from "../MainTitle";
import * as Styles from "./style";
import { InitialSectionProps } from "@/types/dataCardContent";

const InitialSectionCardContent: React.FC<InitialSectionProps> = ({ title, mainText, img, subtitle, secondText }) => {
  return (
    <Styles.Section>
      <MainTitle>{title}</MainTitle>
      <p className="container__text">{mainText}</p>
      <img src={img} alt="Criança passando fio dental" />
      <h2 className="container__subtitle">{subtitle}</h2>
      <p className="container__text">{secondText}</p>
    </Styles.Section>
  )
}

export default InitialSectionCardContent;