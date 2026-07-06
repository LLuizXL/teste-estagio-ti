import { useState } from "react";
import { Link } from "react-router";

export const Header = () => {
  
  return (
    // Header em Row, 2 partes: Foto, nome e cargo & Links para outras paginas
    <nav className="border-bottom d-flex align-items-center justify-content-between p-3 px-md-5 mb-3">
      <div className="d-flex align-items-center gap-md-3 gap-5">
        <img className="img-fluid" src="https://placehold.co/60x60" alt="" />
        <div className="row">
          Nome e Sobrenome
          <small>Cargo aqui</small>
        </div>
      </div>

      <div className="d-flex align-items-center gap-3">
        <ul className="d-flex gap-3 m-0">
          <Link to={"/sobremim"}>Sobre mim</Link>
          <Link to={"/conhecimentos"}>Conhecimentos</Link>
          <Link to={"/formacao"}>Formação</Link>
          <Link to={"/contato"}>Contato</Link>
        </ul>
        <button className="btn btn-light">Modo Claro</button>
      </div>
    </nav>
  );
};
