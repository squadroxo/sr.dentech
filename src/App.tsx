import { Button } from "stories/Button";
import ContainerIntroduction from "components/ContainerIntroduction";
import { Header } from "components/Header";
//Lembrar de no final colocar um backgroud geral
const App: React.FC = () => {
  return (
    <>
      <Header />
      <ContainerIntroduction/>
    </>
  );
};

export default App;
