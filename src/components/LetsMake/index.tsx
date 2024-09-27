import line from "../../assets/line.png";
import * as Style from "./styles";

export const LetsMake = () => {
  return (
    <Style.Container>
      <h3 className="subtitle">Vamos construir algo incrível juntos!</h3>
      <p className="desc">Estamos desenvolvendo uma página web super interativa e educativa para ajudar você a cuidar da saúde dental da sua família de maneira fácil e divertida. Imagine um mundo onde todos têm sorrisos brilhantes e saudáveis!</p>
      <img className="line" src={line} alt="Linha divisória azul com curvas" />
    </Style.Container>
  )
}