import { BrowserRouter as Router, Route, Routes } from "react-router";
import "./App.css";
import { SobreMim } from "./pages/SobreMim";
import { Header } from "./components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { Contato } from "./pages/Contato";
import { Conhecimentos } from "./pages/Conhecimentos";
import { Formacao } from "./pages/Formacao";
import { ThemeProvider } from "./context/ThemeContext";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/sobremim" element={<SobreMim />}></Route>
          <Route path="/formacao" element={<Formacao />}></Route>
          <Route path="/conhecimentos" element={<Conhecimentos />}></Route>
          <Route path="/contato" element={<Contato />}></Route>
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
