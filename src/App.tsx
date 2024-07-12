import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home";
import styles from "./app.module.scss";

const App: React.FC = () => {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <div className={styles.containerFooter}>
          <Footer />
        </div>
    </BrowserRouter>
  );
};

export default App;
