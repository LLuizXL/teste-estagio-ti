import { Link, useLocation } from "react-router";
import { useTheme } from "../../context/ThemeContext";
import { BsMoon, BsSun } from "react-icons/bs";
import { profile } from "../../contents/sobreMim";

export const Header = () => {
  const fotoPerfil = [profile.perfil["foto"]]
  const { themeName, toggleTheme } = useTheme();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className="navbar navbar-expand-lg sticky-top px-3 px-md-5"
      aria-label="Navegação principal"
    >
      <Link
        to="/"
        className="navbar-brand d-flex align-items-center gap-3 text-decoration-none"
        aria-label="Página inicial"
      >
        <img
          className="img-fluid rounded-circle"
          src="https://placehold.co/50x50"
          alt="Foto de perfil do desenvolvedor"
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
        aria-label="Abrir menu de navegação"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse justify-content-end"
        id="navMenu"
      >
        <ul className="navbar-nav  gap-lg-3 gap-2 my-3 my-lg-0 me-lg-4">
          <li className="nav-item">
            <Link
              to="/"
              className="link"
              aria-current={isActive("/") ? "page" : undefined}
            >
              Página inicial
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/conhecimentos"
              className="link"
              aria-current={isActive("/conhecimentos") ? "page" : undefined}
            >
              Conhecimentos
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/formacao"
              className="link"
              aria-current={isActive("/formacao") ? "page" : undefined}
            >
              Formação
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contato"
              className="link"
              aria-current={isActive("/contato") ? "page" : undefined}
            >
              Contato
            </Link>
          </li>
        </ul>

        <button
          className={`btn ${themeName == "light" ? "btn-outline-light" : "btn-outline-light"}`}
          onClick={toggleTheme}
          aria-label={`Mudar para tema ${themeName === "dark" ? "claro" : "escuro"}`}
          title={`Tema atual: ${themeName}`}
        >
          {themeName == "dark" ? (
            <BsMoon size={20} aria-hidden="true" />
          ) : (
            <BsSun size={20} aria-hidden="true" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Header;
