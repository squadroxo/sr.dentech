import ContainerIntroduction from "components/ContainerIntroduction";
import { Header } from "components/Header";
import { Footer } from "components/Footer";
import { Sobre } from "components/Sobre";
//Lembrar de no final colocar um backgroud geral
const App: React.FC = () => {
  return (
    <>
      <Header />
      <ContainerIntroduction/>
      <Sobre />
      <Footer />
    </>
  );
};

export default App;
