import ContainerIntroduction from "components/ContainerIntroduction";
import { Header } from "components/Header";
import { Footer } from "components/Footer";
import { Sobre } from "components/Sobre";
import ContainerSobreNos from "components/ContainerSobreNos";
//Lembrar de no final colocar um backgroud geral
//Lembrar de preencher o espaço entre footer e sobre nos
const App: React.FC = () => {
  return (
    <>
      <Header />
      <ContainerIntroduction/>
      <Sobre />
      <ContainerSobreNos/>
      <Footer />
    </>
  );
};

export default App;
