import { Link } from "react-router";
import { useTheme } from "../../context/ThemeContext";

export const Header = () => {
  const { themeName, toggleTheme } = useTheme();
  return (
    // Header em Row, 2 partes: Foto, nome e cargo & Links para outras paginas
    <nav className="d-flex align-items-center justify-content-between p-3 px-md-5 mb-3 sticky-top">
      <div className="d-flex align-items-center gap-md-3 gap-5">
        <img className="img-fluid" src="https://placehold.co/60x60" alt="" />
        <div className="row">
          Nome e Sobrenome
          <small>Cargo aqui</small>
        </div>
      </div>

      <div className="d-flex align-items-center gap-3">
        <ul className="d-flex gap-3 m-0">
          <Link to={"/sobremim"} className="link">
            Sobre mim
          </Link>
          <Link to={"/conhecimentos"} className="link">
            Conhecimentos
          </Link>
          <Link to={"/formacao"} className="link">
            Formação
          </Link>
          <Link to={"/contato"} className="link">
            Contato
          </Link>
        </ul>
        <button className="btn btn-light" onClick={toggleTheme}>
          {themeName == "light" ? "Modo Claro" : "Modo Escuro"}
        </button>
      </div>
    </nav>
  );
};
