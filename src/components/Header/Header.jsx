import { Link } from "react-router"


export const Header = () => {
  return (
    // Header em Row, Foto/nome/cargo & Links para outras paginas
    <nav className="border-bottom d-flex align-items-center justify-content-between p-3">
        <div className="d-flex align-items-center gap-md-3 gap-5">
            <img className="img-fluid" src="https://placehold.co/60x60" alt="" />
            <div className="row">
            Nome e Sobrenome
            <small>Cargo aqui</small>
            </div>
        </div>

        <ul className="d-flex gap-3">
            <Link to={"/sobremim"}>Sobre mim</Link>
            <Link to={"/conhecimento"}>Conhecimentos</Link>
            <Link to={"/formacao"}>Formação</Link>
            <Link to={"/contato"}>Contato</Link>

        </ul>
    </nav>
  )
}
