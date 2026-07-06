import { Link } from "react-router";
import { useTheme } from "../../context/ThemeContext";
import { BsMoon, BsSun } from "react-icons/bs";
import { profile } from "../../contents/sobreMim";

export const Header = () => {
  const fotoPerfil = [profile.perfil["foto"]]
  const { themeName, toggleTheme } = useTheme();
// Header em Row, 2 partes: Foto, nome e cargo & Links para outras paginas OU botao de hamburger substituindo os links(apenas pra mobile)
  return (
    <nav className="navbar navbar-expand-lg sticky-top px-3 px-md-5">

      <Link to="/" className="navbar-brand d-flex align-items-center gap-3 text-decoration-none">
        <img
          className="img-fluid rounded-circle"
          src={fotoPerfil}
          alt="Foto de perfil"
          style={{ width: 50, height: 50 }}
        />
        <div className="d-flex flex-column lh-sm">
          <span className="fw-semibold text-light">{profile.perfil["nome"]}</span>
          <small className="text-secondary">{profile.perfil["cargo"]}</small>
        </div>
      </Link>

   
      <button
        className="navbar-toggler border-light"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navMenu"
        aria-controls="navMenu"
        aria-expanded="false"
        aria-label="Abrir menu"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      
      <div className="collapse navbar-collapse justify-content-end" id="navMenu">
        <ul className="navbar-nav  gap-lg-3 gap-2 my-3 my-lg-0 me-lg-4">
          <li className="nav-item">
            <Link to="/sobremim" className="link">Sobre mim</Link>
          </li>
          <li className="nav-item">
            <Link to="/conhecimentos" className="link">Conhecimentos</Link>
          </li>
          <li className="nav-item">
            <Link to="/formacao" className="link">Formação</Link>
          </li>
          <li className="nav-item">
            <Link to="/contato" className="link">Contato</Link>
          </li>
        </ul>

        <button className={`btn ${themeName == "light" ? "btn-outline-light" : "btn-outline-light"}`} onClick={toggleTheme}>
      
          {themeName == "dark" ? (
            <BsMoon size={20}/>
          ) : (<BsSun size={20}/>)}

        </button>
      </div>
    </nav>
  );
};