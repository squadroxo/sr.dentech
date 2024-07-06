import ContainerIntroduction from "components/ContainerIntroduction";
import { Header } from "components/Header";
import { Footer } from "components/Footer";
//Lembrar de no final colocar um backgroud geral
const App: React.FC = () => {
  return (
    <>
      <Header />
      <ContainerIntroduction/>
      <Footer />
    </>
  );
};

export default App;
