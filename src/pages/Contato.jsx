

export const Contato = () => {
  return (
    <main className="container d-flex flex-column align-items-center ">
      <h2>Contato</h2>
      <p className="text-secondary">Preencha o formulário abaixo para podermos conversar.</p>

      <form className="d-flex flex-column bg-body-tertiary p-3 rounded-3 col-8 " action="">
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
    </main>
  )
}
