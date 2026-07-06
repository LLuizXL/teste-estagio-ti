
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs"


export const Contato = () => {
  return (
    <main className="container d-flex flex-column align-items-center">
      <h2>Contato</h2>
      <p className="text-secondary">Preencha o formulário abaixo para podermos conversar.</p>

      <form className="d-flex flex-column p-3 rounded-3 col-8 gap-3 mb-5 " action="">
       <div className="form-group">
        <label htmlFor="" className="form-label d-block">Nome</label>
        <input type="text" className="w-100" />
       </div>

       <div className="form-group mb-3">
        <label htmlFor="" className="form-label d-block">E-mail</label>
        <input type="email" className="w-100" />
       </div>

       <div className="form-group">
        <label htmlFor="" className="form-label d-block">Assunto</label>
        <textarea className="w-100" rows="10" name="" />
       </div>
      
        <button className="btn btn-primary w-100 py-2 align-self-center mt-3">Enviar</button>
       
      </form>
      <section className="text-center">
        <h3 className="mb-3">Ou entre em contato comigos pelas redes sociais:</h3>
        <ul className="d-flex flex-row justify-content-center gap-5 align-content-between">
          <a href="" className="link"><BsGithub  size={40}/></a>
          <a href="" className="link"><BsLinkedin size={40}/></a>
          <a href="" className="link"><BsInstagram size={40} /> </a>

        </ul>
      </section>
    </main>
  )
}
