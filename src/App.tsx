import { Header } from "components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { NotFoundPage } from "./pages/NotFound";
import ConstrucaoPage from "./pages/Construcao";
import { SobreCardPage } from "./pages/SobreCard";
import { SaibaMaisPage } from "./pages/SaibaMais";
import { Footer } from "./components/Footer";
import LeituraCard from "./pages/LeituraCard";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aprenda-mais/:slugCard" element={<SobreCardPage />} />
        <Route path="/construcao" element={<ConstrucaoPage />} />
        <Route path="/sobre" element={<ConstrucaoPage />} />
        <Route path="/saude-bucal-familiar" element={<ConstrucaoPage />} />
        <Route path="/problemas-bucais" element={<ConstrucaoPage />} />
        <Route path="/conteudo" element={<LeituraCard />} />
        <Route path="/saiba-mais" element={<SaibaMaisPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
