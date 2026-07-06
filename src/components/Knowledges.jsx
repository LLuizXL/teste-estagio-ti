

const Knowledges = (props) => {
  return (
    <article className="knowledge-card d-flex gap-3 p-3 align-items-center">
      <figure className="m-0"><img src="https://placehold.co/80x80" alt="" /></figure>
      <div>
      <h3 className=" fw-bold text-uppercase">{props.nome}</h3>
      <span>{props.descricao}</span>
      </div>
    </article>
  );
};

export default Knowledges;
