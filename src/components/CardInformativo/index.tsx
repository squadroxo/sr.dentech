import * as Style from "./styles";
import dente from "../../assets/dente.svg";

export const CardInformativo = () => {
  return (
    <Style.Container>
      <img src={dente} alt="Imagem de um dente branco" className="img"/>
      <p className="text">Estamos animados para mostrar tudo isso em breve! <br />Prepare-se para um sorriso ainda mais feliz</p>
    </Style.Container>
  )
}