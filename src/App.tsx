import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home";
import styles from "./app.module.scss";
import { NotFoundPage } from "./pages/NotFound";
import ConstrucaoPage from "./pages/Construcao";
import { SobreCardPage } from "./pages/SobreCard";
import {SaibaMaisPage} from "./pages/SaibaMais";
const App: React.FC = () => {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aprenda-mais/:slugCard" element={<SobreCardPage />}/>
          <Route path="*" element={<NotFoundPage />}/>
          <Route path="/construcao" element={<ConstrucaoPage />}/>
          <Route path="/saiba-mais" element={<SaibaMaisPage />}/>
        </Routes>
        
    </BrowserRouter>
  );
};

export default App;
