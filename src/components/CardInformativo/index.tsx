import * as Style from "./styles";
import dente from "../../assets/dente.svg";
import { CardInformativoProps } from "@/types/dataCardContent";

export const CardInformativo: React.FC<CardInformativoProps> = ({ text }) => {
  // const width = window.innerWidth;
  return (
    <Style.Container>
      <img src={dente} alt="Imagem de um dente branco" className="img" />
      <p className="text">{text}</p>
      {/* TODO: Desenvolver o desktop posteriormente
      {width > 1199 && width < 1921 && (
        <div className="strutureDesktop">
          <img src={dente} alt="Imagem de um dente branco" className="imgDesktop" />
          <p className="textDesktop">Estamos animados para mostrar tudo isso em breve! <br />Prepare-se para um sorriso ainda mais feliz</p>
          <img src={dente} alt="Imagem de um dente branco" className="imgDesktop" />
        </div>
      )} */}
    </Style.Container>
  )
}
/*background-color: #267B80;*/