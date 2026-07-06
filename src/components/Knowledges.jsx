


const Knowledges = ({Icon, nome, descricao}) => {
  return (
    <article className="knowledge-card d-flex gap-3 col-md-3 p-3 align-items-center">
      <figure className="m-0"> <Icon size={80} /></figure>
      <div>
      <h3 className=" fw-bold text-uppercase">{nome}</h3>
      <span>{descricao}</span>
      </div>
    </article>
  );
};

export default Knowledges;
