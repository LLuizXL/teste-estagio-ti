import { BsBoxArrowUpRight, BsGithub } from "react-icons/bs";

const CardProjetos = (props) => {
  return (
    <article className="d-flex flex-column text-center align-items-center">
      <figure>
        <img
          src={props.img}
          width={200}
          height={200}
          alt={`Projeto: ${props.projeto}`}
        />
        <figcaption className="d-none">{props.projeto}</figcaption>
      </figure>
      <h3>{props.projeto}</h3>
      <div
        className="d-flex flex-row gap-3"
        role="group"
        aria-label={`Links para ${props.projeto}`}
      >
        {props.link && (
          <a
            className="link"
            href={props.link}
            aria-label={`Acessar projeto ${props.projeto}`}
            title={`Acessar projeto ${props.projeto}`}
          >
            <BsBoxArrowUpRight size={30} aria-hidden="true" />
          </a>
        )}
        <a
          href={props.github}
          className="link"
          aria-label={`Ver código do projeto ${props.projeto} no GitHub`}
          title={`Ver código no GitHub`}
        >
          <BsGithub size={30} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
};

export default CardProjetos;
