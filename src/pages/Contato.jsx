import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

export const Contato = () => {
  return (
    <main className="container d-flex flex-column align-items-center">
      <h1>Contato</h1>
      <p className="text-secondary">
        Preencha o formulário abaixo para podermos conversar.
      </p>

      <form
        className="d-flex flex-column p-3 rounded-3 col-8 gap-3 mb-5 "
        action=""
        aria-label="Formulário de contato"
      >
        <div className="form-group">
          <label htmlFor="nome" className="form-label d-block">
            Nome <span aria-label="obrigatório">*</span>
          </label>
          <input
            type="text"
            id="nome"
            className="w-100"
            aria-required="true"
            required
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="email" className="form-label d-block">
            E-mail <span aria-label="obrigatório">*</span>
          </label>
          <input
            type="email"
            id="email"
            className="w-100"
            aria-required="true"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="assunto" className="form-label d-block">
            Assunto <span aria-label="obrigatório">*</span>
          </label>
          <textarea
            id="assunto"
            className="w-100"
            rows="10"
            aria-required="true"
            required
          />
        </div>

        <button
          className="btn btn-primary w-100 py-2 align-self-center mt-3"
          type="submit"
          aria-label="Enviar formulário de contato"
        >
          Enviar
        </button>
      </form>
      <section className="text-center">
        <h2 className="mb-3">
          Ou entre em contato comigo pelas redes sociais:
        </h2>
        <ul className="d-flex flex-row justify-content-center gap-5 align-content-between list-unstyled">
          <li>
            <a target="_blank" href="https://github.com/LLuizXL" className="link" aria-label="Visite meu GitHub">
              <BsGithub size={40} title="GitHub" />
            </a>
          </li>
          <li>
            <a  target="_blank" href="https://linkedin.com/in/luizgvmleo" className="link" aria-label="Visite meu LinkedIn">
              <BsLinkedin size={40} title="LinkedIn" />
            </a>
          </li>
          <li>
            <a target="_blank" href="" className="link" aria-label="Visite meu Instagram">
              <BsInstagram size={40} title="Instagram" />{" "}
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
};
